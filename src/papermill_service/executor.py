from collections import defaultdict
from typing import Literal, Union, cast
from uuid import UUID

from nbformat import NotebookNode
from papermill import execute_notebook
from pydantic import BaseModel, Field, FilePath


class ExecutionNotFound(BaseModel):
    status: Literal["not_found"]


class ExecutionPending(BaseModel):
    status: Literal["pending"]


class ExecutionComplete(BaseModel):
    status: Literal["complete"]
    notebook: NotebookNode


class ExecutionStatus(BaseModel):
    status: Union[ExecutionNotFound, ExecutionPending, ExecutionComplete] = Field(
        discriminator="status"
    )


_EXECUTIONS: dict[UUID, ExecutionStatus] = defaultdict(
    lambda: ExecutionStatus(status=dict(status="not_found"))
)


async def execute_notebook_with_tracking(
    uuid: UUID, notebook_path: FilePath, parameters: dict
) -> None:
    _EXECUTIONS[uuid] = ExecutionStatus(status=dict(status="pending"))
    notebook = cast(
        NotebookNode,
        execute_notebook(notebook_path, None, parameters=parameters),
    )
    _EXECUTIONS[uuid] = ExecutionStatus(
        status=dict(status="complete", notebook=notebook)
    )


def get_execution_status(uuid: UUID) -> ExecutionStatus:
    return _EXECUTIONS[uuid]
