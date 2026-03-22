from pathlib import Path

import psycopg2

from parser.config import settings
from parser.exceptions import RepositoryError


SCHEMA_PATH = Path(__file__).with_name("schema.sql")


def get_connection():
    try:
        return psycopg2.connect(settings.database_dsn)
    except psycopg2.Error as exc:
        raise RepositoryError("Failed to connect to PostgreSQL") from exc


def initialize_schema(connection) -> None:
    try:
        schema_sql = SCHEMA_PATH.read_text(encoding="utf-8")
        with connection.cursor() as cursor:
            cursor.execute(schema_sql)
        connection.commit()
    except OSError as exc:
        connection.rollback()
        raise RepositoryError("Failed to read database schema") from exc
    except psycopg2.Error as exc:
        connection.rollback()
        raise RepositoryError("Failed to initialize database schema") from exc
