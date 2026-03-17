import time
from typing import Any

import requests

from parser.config import settings
from parser.exchanges.base import BaseExchangeClient


class BinanceClient(BaseExchangeClient):
    def __init__(self) -> None:
        self.base_url = settings.binance_base_url.rstrip("/")
        self.timeout_seconds = settings.request_timeout_seconds
        self.sleep_between_requests = settings.sleep_between_requests_seconds
        self.per_request_limit = settings.binance_klines_page_limit
        self.session = requests.Session()

    def load_klines_raw(
        self,
        symbol: str,
        interval: str,
        limit_total: int,
    ) -> list[Any]:

        url = f"{self.base_url}/api/v3/klines"
        all_klines: list[Any] = []
        end_time: int | None = None

        while len(all_klines) < limit_total:
            current_limit = min(self.per_request_limit, limit_total - len(all_klines))

            params = {
                "symbol": symbol,
                "interval": interval,
                "limit": current_limit,
            }

            if end_time is not None:
                params["endTime"] = end_time - 1

            response = self.session.get(url, params=params, timeout=self.timeout_seconds)
            response.raise_for_status()

            klines = response.json()

            if not klines:
                break

            all_klines = klines + all_klines
            end_time = klines[0][0]

            time.sleep(self.sleep_between_requests)

        return all_klines[-limit_total:]