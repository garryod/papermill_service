Search.setIndex({"docnames": ["developer/explanations/decisions", "developer/explanations/decisions/0001-record-architecture-decisions", "developer/how-to/build-docs", "developer/how-to/contribute", "developer/how-to/lint", "developer/how-to/make-release", "developer/how-to/run-tests", "developer/how-to/static-analysis", "developer/how-to/update-tools", "developer/index", "developer/reference/standards", "developer/tutorials/dev-install", "genindex", "index", "user/explanations/docs-structure", "user/how-to/run-container", "user/index", "user/reference/api", "user/tutorials/installation"], "filenames": ["developer/explanations/decisions.rst", "developer/explanations/decisions/0001-record-architecture-decisions.rst", "developer/how-to/build-docs.rst", "developer/how-to/contribute.rst", "developer/how-to/lint.rst", "developer/how-to/make-release.rst", "developer/how-to/run-tests.rst", "developer/how-to/static-analysis.rst", "developer/how-to/update-tools.rst", "developer/index.rst", "developer/reference/standards.rst", "developer/tutorials/dev-install.rst", "genindex.rst", "index.rst", "user/explanations/docs-structure.rst", "user/how-to/run-container.rst", "user/index.rst", "user/reference/api.rst", "user/tutorials/installation.rst"], "titles": ["Architectural Decision Records", "1. Record architecture decisions", "Build the docs using sphinx", "Contributing to the project", "Run linting using pre-commit", "Make a release", "Run the tests using pytest", "Run static analysis using mypy", "Update the tools", "Developer Guide", "Standards", "Developer install", "API Index", "papermill_service", "About the documentation", "Run in a container", "User Guide", "API", "Installation"], "terms": {"we": [0, 1, 3], "major": 0, "adr": [0, 1], "describ": [0, 1], "michael": [0, 1], "nygard": [0, 1], "below": 0, "i": [0, 3, 4, 6, 7, 8, 9, 10, 14, 16, 17, 18], "list": 0, "our": 0, "current": [0, 8, 18], "1": [0, 10], "date": 1, "2022": 1, "02": 1, "18": 1, "accept": 1, "need": [1, 14, 18], "made": 1, "thi": [1, 2, 4, 5, 8, 10, 11, 13, 14, 17, 18], "project": [1, 2, 6, 8, 9], "us": [1, 9, 10, 11, 13, 15, 18], "see": [1, 2, 5], "": 1, "articl": 1, "link": [1, 9, 16], "abov": [1, 4], "To": [1, 5, 8, 11, 13, 15], "creat": [1, 5], "new": [1, 3, 5, 11, 16], "copi": 1, "past": 1, "from": [1, 2, 9, 10, 15, 16, 18], "exist": [1, 3, 18], "ones": 1, "you": [2, 3, 4, 5, 6, 7, 11, 18], "can": [2, 3, 4, 6, 7, 11, 18], "base": 2, "directori": [2, 10], "run": [2, 3, 8, 9, 10, 11, 13, 16], "tox": [2, 4, 6, 7, 11], "e": [2, 4, 6, 7, 11], "static": [2, 9, 10, 11], "which": [2, 8, 11], "includ": [2, 16], "api": [2, 10, 16], "pull": [2, 3, 8, 15], "docstr": [2, 10], "code": [2, 4, 13], "document": [2, 3, 9, 16], "standard": [2, 3, 9], "The": [2, 3, 4, 10, 13, 14, 18], "built": [2, 15], "html": 2, "open": [2, 3, 11], "local": [2, 11], "web": 2, "brows": 2, "firefox": 2, "index": [2, 16], "also": [2, 3, 6, 9, 16, 18], "an": [2, 4, 8], "process": [2, 10], "watch": 2, "your": [2, 3], "chang": [2, 3, 4, 8, 13], "rebuild": 2, "whenev": 2, "reload": 2, "ani": [2, 3, 4, 8, 18], "browser": 2, "page": [2, 5, 10], "view": 2, "localhost": 2, "http": [2, 5, 8, 13, 18], "8000": 2, "If": [2, 3, 4, 18], "ar": [2, 3, 10, 14, 15], "make": [2, 3, 9], "sourc": [2, 7, 11, 13, 18], "too": 2, "tell": [2, 4], "src": 2, "most": [3, 14], "welcom": 3, "all": [3, 4], "request": [3, 8], "handl": [3, 4], "through": [3, 11], "github": [3, 5, 8, 11, 13, 15, 18], "pleas": [3, 5, 10], "check": [3, 4, 6, 7, 8, 10, 11], "befor": 3, "file": [3, 4, 7], "one": [3, 14], "have": [3, 4, 11], "great": 3, "idea": 3, "involv": 3, "big": 3, "ticket": 3, "want": 3, "sure": 3, "don": 3, "t": [3, 14], "spend": 3, "time": [3, 4], "someth": [3, 8], "might": 3, "fit": 3, "scope": 3, "offer": 3, "place": 3, "ask": 3, "question": 3, "share": 3, "end": 3, "obviou": 3, "when": [3, 11], "close": [3, 8], "rais": 3, "instead": [3, 15], "while": 3, "100": 3, "doe": 3, "librari": [3, 16], "bug": 3, "free": 3, "significantli": 3, "reduc": 3, "number": [3, 5, 15, 17], "easili": 3, "caught": 3, "remain": 3, "same": [3, 5], "improv": [3, 14], "contain": [3, 10, 11, 13, 16], "inform": [3, 14], "set": [3, 4, 10], "up": [3, 9], "environ": [3, 11], "test": [3, 9], "what": 3, "should": [3, 18], "follow": [3, 5, 10, 11], "black": [4, 10], "flake8": [4, 10], "isort": [4, 10], "under": [4, 11], "command": 4, "Or": 4, "instal": [4, 9, 13, 15, 16], "hook": 4, "each": 4, "do": [4, 7], "git": [4, 8, 11, 18], "just": 4, "report": [4, 6], "reformat": 4, "repositori": [4, 10], "likewis": 4, "get": [4, 5, 9, 11, 15], "those": 4, "manual": 4, "json": 4, "formatt": 4, "well": 4, "save": 4, "highlight": [4, 7], "editor": 4, "window": 4, "checklist": 5, "choos": [5, 11], "pep440": 5, "compliant": 5, "pep": 5, "python": [5, 8, 11, 13], "org": 5, "0440": 5, "go": 5, "draft": 5, "click": [5, 11], "tag": 5, "suppli": 5, "chose": 5, "gener": [5, 8], "note": [5, 16], "review": 5, "edit": 5, "titl": [5, 10], "publish": 5, "push": 5, "main": [5, 15], "branch": 5, "ha": [5, 8, 18], "effect": 5, "except": 5, "option": 5, "done": [6, 7], "It": [6, 7, 18], "find": 6, "function": [6, 10, 14], "look": 6, "like": 6, "them": [6, 7], "error": 6, "coverag": 6, "commandlin": [6, 18], "cov": 6, "xml": 6, "type": [7, 10, 11, 18], "definit": 7, "without": 7, "potenti": 7, "issu": 7, "where": [7, 8], "match": 7, "modul": 8, "merg": 8, "papermill_servic": [8, 11, 15, 18], "structur": 8, "provid": [8, 13], "mean": 8, "keep": 8, "techniqu": 8, "sync": 8, "between": 8, "multipl": 8, "latest": 8, "version": [8, 15, 17], "skeleton": 8, "rebas": 8, "fals": 8, "com": [8, 11, 18], "garryod": [8, 11, 13, 15, 18], "conflict": 8, "indic": 8, "area": 8, "setup": [8, 11], "more": [8, 14, 16], "detail": 8, "split": [9, 13, 16], "four": [9, 14, 16], "categori": [9, 16], "access": [9, 16], "side": [9, 16], "bar": [9, 16], "contribut": [9, 13], "build": [9, 10], "doc": [9, 10, 11], "sphinx": [9, 10, 11], "pytest": [9, 11], "analysi": [9, 10, 11], "mypi": [9, 10, 11], "lint": [9, 10, 11], "pre": [9, 10, 11, 15], "commit": [9, 10, 11], "updat": 9, "tool": [9, 10], "releas": [9, 13, 15, 16, 18], "practic": [9, 16], "step": [9, 11, 16], "dai": 9, "dev": [9, 11], "task": 9, "architectur": 9, "decis": 9, "record": 9, "why": [9, 16], "technic": [9, 14, 16], "materi": [9, 16], "defin": 10, "conform": 10, "format": 10, "style": 10, "import": 10, "order": [10, 14], "how": [10, 14], "guid": [10, 13, 14], "napoleon": 10, "extens": 10, "As": 10, "googl": 10, "consid": 10, "hint": 10, "signatur": 10, "For": 10, "exampl": 10, "def": 10, "func": 10, "arg1": 10, "str": [10, 17], "arg2": 10, "int": 10, "bool": 10, "summari": 10, "line": [10, 13], "extend": 10, "descript": 10, "arg": 10, "return": 10, "valu": 10, "true": 10, "extract": 10, "underlin": 10, "convent": 10, "headl": 10, "head": 10, "2": [10, 13], "3": [10, 11, 18], "These": 11, "instruct": 11, "take": 11, "minim": 11, "requir": [11, 14, 18], "so": [11, 18], "first": 11, "either": 11, "host": 11, "machin": 11, "venv": [11, 18], "8": [11, 18], "later": [11, 18], "vscode": 11, "virtualenv": 11, "cd": 11, "python3": [11, 18], "m": [11, 13, 18], "bin": [11, 18], "activ": [11, 18], "pip": [11, 13, 18], "devcontain": 11, "reopen": 11, "prompt": 11, "termin": [11, 18], "graph": 11, "packag": [11, 13], "tree": 11, "pipdeptre": 11, "now": [11, 18], "p": 11, "parallel": 11, "servic": 13, "runner": 13, "jupyt": 13, "notebook": 13, "combin": 13, "fastapi": 13, "papermil": 13, "pypi": 13, "io": [13, 15], "configur": 13, "th": 13, "start": [13, 16], "simpli": 13, "notebook_path": 13, "path": [13, 18], "ipynb": 13, "section": 13, "user": 13, "develop": 13, "back": 13, "grand": 14, "unifi": 14, "theori": 14, "david": 14, "la": 14, "There": 14, "secret": 14, "understood": 14, "write": 14, "good": 14, "softwar": [14, 18], "isn": 14, "thing": 14, "call": 14, "thei": 14, "tutori": 14, "refer": [14, 17], "explan": 14, "repres": 14, "differ": 14, "purpos": 14, "approach": 14, "creation": 14, "understand": 14, "implic": 14, "help": 14, "often": 14, "immens": 14, "topic": 14, "its": [15, 18], "depend": [15, 18], "alreadi": 15, "avail": 15, "registri": 15, "docker": 15, "ghcr": 15, "typic": 16, "usag": 16, "here": 16, "experienc": 16, "about": 16, "work": 16, "wai": 16, "intern": 17, "__version__": 17, "calcul": 17, "pypa": 17, "setuptools_scm": 17, "recommend": 18, "interfer": 18, "featur": 18, "interfac": 18, "been": 18}, "objects": {"": [[17, 0, 0, "-", "papermill_service"]], "papermill_service.papermill_service": [[17, 1, 1, "", "__version__"]]}, "objtypes": {"0": "py:module", "1": "py:data"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "data", "Python data"]}, "titleterms": {"architectur": [0, 1], "decis": [0, 1], "record": [0, 1], "1": 1, "statu": 1, "context": 1, "consequ": 1, "build": [2, 11], "doc": 2, "us": [2, 4, 6, 7], "sphinx": 2, "autobuild": 2, "contribut": 3, "project": 3, "issu": [3, 4], "discuss": 3, "code": [3, 10], "coverag": 3, "develop": [3, 9, 11], "guid": [3, 9, 16], "run": [4, 6, 7, 15], "lint": 4, "pre": 4, "commit": 4, "fix": 4, "vscode": 4, "support": 4, "make": 5, "releas": 5, "test": [6, 11], "pytest": 6, "static": 7, "analysi": 7, "mypi": 7, "updat": 8, "tool": 8, "tutori": [9, 16], "how": [9, 13, 16], "explan": [9, 16], "refer": [9, 16], "standard": 10, "document": [10, 13, 14], "instal": [11, 18], "clone": 11, "repositori": 11, "depend": 11, "see": 11, "what": 11, "wa": 11, "api": [12, 17], "index": 12, "papermill_servic": [13, 17], "i": 13, "structur": 13, "about": 14, "contain": 15, "start": 15, "user": 16, "check": 18, "your": 18, "version": 18, "python": 18, "creat": 18, "virtual": 18, "environ": 18, "librari": 18}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.viewcode": 1, "sphinx": 57}, "alltitles": {"Architectural Decision Records": [[0, "architectural-decision-records"]], "1. Record architecture decisions": [[1, "record-architecture-decisions"]], "Status": [[1, "status"]], "Context": [[1, "context"]], "Decision": [[1, "decision"]], "Consequences": [[1, "consequences"]], "Build the docs using sphinx": [[2, "build-the-docs-using-sphinx"]], "Autobuild": [[2, "autobuild"]], "Contributing to the project": [[3, "contributing-to-the-project"]], "Issue or Discussion?": [[3, "issue-or-discussion"]], "Code coverage": [[3, "code-coverage"]], "Developer guide": [[3, "developer-guide"]], "Run linting using pre-commit": [[4, "run-linting-using-pre-commit"]], "Running pre-commit": [[4, "running-pre-commit"]], "Fixing issues": [[4, "fixing-issues"]], "VSCode support": [[4, "vscode-support"]], "Make a release": [[5, "make-a-release"]], "Run the tests using pytest": [[6, "run-the-tests-using-pytest"]], "Run static analysis using mypy": [[7, "run-static-analysis-using-mypy"]], "Update the tools": [[8, "update-the-tools"]], "Developer Guide": [[9, "developer-guide"]], "Tutorials": [[9, null], [16, null]], "How-to Guides": [[9, null], [16, null]], "Explanations": [[9, null], [16, null]], "Reference": [[9, null], [16, null]], "Standards": [[10, "standards"]], "Code Standards": [[10, "code-standards"]], "Documentation Standards": [[10, "documentation-standards"]], "Developer install": [[11, "developer-install"]], "Clone the repository": [[11, "clone-the-repository"]], "Install dependencies": [[11, "install-dependencies"]], "See what was installed": [[11, "see-what-was-installed"]], "Build and test": [[11, "build-and-test"]], "API Index": [[12, "api-index"]], "papermill_service": [[13, "papermill-service"], [17, "papermill-service"]], "How the documentation is structured": [[13, "how-the-documentation-is-structured"]], "About the documentation": [[14, "about-the-documentation"]], "Run in a container": [[15, "run-in-a-container"]], "Starting the container": [[15, "starting-the-container"]], "User Guide": [[16, "user-guide"]], "API": [[17, "module-papermill_service"]], "Installation": [[18, "installation"]], "Check your version of python": [[18, "check-your-version-of-python"]], "Create a virtual environment": [[18, "create-a-virtual-environment"]], "Installing the library": [[18, "installing-the-library"]]}, "indexentries": {"module": [[17, "module-papermill_service"]], "papermill_service": [[17, "module-papermill_service"]], "papermill_service.__version__ (in module papermill_service)": [[17, "papermill_service.papermill_service.__version__"]]}})