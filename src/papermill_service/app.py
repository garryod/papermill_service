from uuid import UUID, uuid4

from fastapi import BackgroundTasks, Body, Depends, FastAPI
from papermill import inspect_notebook

from papermill_service.executor import (
    execute_notebook_with_tracking,
    get_execution_status,
)

from . import __version__
from .config import Settings, get_settings

app = FastAPI()


@app.get("/version")
async def root():
    return dict(version=__version__)


@app.get("/params")
async def params(settings: Settings = Depends(get_settings)):
    return inspect_notebook(settings.notebook_path)


@app.post("/start")
async def start(
    background_tasks: BackgroundTasks,
    parameters: dict = Body(default=dict()),
    settings: Settings = Depends(get_settings),
):
    task_id = uuid4()
    background_tasks.add_task(
        execute_notebook_with_tracking, task_id, settings.notebook_path, parameters
    )
    return dict(task_id=task_id)


@app.get("/fetch/{task_id}")
async def fetch(task_id: UUID):
    return get_execution_status(task_id).status
