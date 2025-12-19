import os
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from .routes import home, about, projects, contact

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

app = FastAPI()

# Static files
app.mount(
    "/static",
    StaticFiles(directory=os.path.join(BASE_DIR, "static")),
    name="static"
)

# Include routes
app.include_router(home.router)
app.include_router(about.router)
app.include_router(projects.router)
app.include_router(contact.router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
