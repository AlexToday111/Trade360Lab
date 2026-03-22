import logging

import uvicorn
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

from parser.config import settings
from parser.exceptions import AppError
from parser.logging_setup import configure_logging


logger = logging.getLogger(__name__)


def create_app() -> FastAPI:
    configure_logging()

    app = FastAPI(title="TradeLab Python Parser", version="0.1.0")

    @app.on_event("startup")
    async def on_startup() -> None:
        logger.info("Starting python-parser service on port %s", settings.python_service_port)

    @app.exception_handler(AppError)
    async def handle_app_error(_: Request, exc: AppError) -> JSONResponse:
        logger.exception("Application error: %s", exc.message)
        return JSONResponse(status_code=exc.status_code, content={"status": "error", "message": exc.message})

    @app.get("/health")
    async def healthcheck() -> dict[str, str]:
        return {"status": "ok", "service": "python-parser"}

    return app


app = create_app()


if __name__ == "__main__":
    uvicorn.run("parser.main:app", host="0.0.0.0", port=settings.python_service_port, reload=False)
