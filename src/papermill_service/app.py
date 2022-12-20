from typing import cast

from fastapi import Body, Depends, FastAPI
from nbformat import NotebookNode
from papermill import execute_notebook, inspect_notebook

from . import __version__
from .config import Settings, get_settings

app = FastAPI()


@app.get("/version")
async def root():
    return dict(version=__version__)


@app.get("/params")
async def params(settings: Settings = Depends(get_settings)):
    return inspect_notebook(settings.notebook_path)


@app.get("/run")
async def run(parameters: dict = Body(), settings: Settings = Depends(get_settings)):
    return cast(
        NotebookNode,
        execute_notebook(settings.notebook_path, None, parameters=parameters),
    ).dict()
