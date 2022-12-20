from functools import lru_cache

from pydantic import BaseSettings, FilePath


class Settings(BaseSettings):
    notebook_path: FilePath

    class Config:
        env_file = ".env"


@lru_cache
def get_settings():
    return Settings()
