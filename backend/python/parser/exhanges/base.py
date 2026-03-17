from abc import ABC, abstractmethod
from typing import Any

class BaseExchangeClient(ABC):
    @abstractmethod
    def load_klines_raw(
            self,
            symbol: str,
            interval: str,
            limit_total: int,
    ) -> list[Any]:
        raise NotImplementedError()