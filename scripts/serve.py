from pathlib import Path
from functools import partial
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
import argparse

parser=argparse.ArgumentParser()
parser.add_argument('--port',type=int,default=8768)
args=parser.parse_args()
site=Path(__file__).resolve().parents[1]/'site'
server=ThreadingHTTPServer(('127.0.0.1',args.port),partial(SimpleHTTPRequestHandler,directory=str(site)))
print(f'Tenten Knowledge: http://localhost:{server.server_port}/index.html',flush=True)
try:
    server.serve_forever()
except KeyboardInterrupt:
    server.server_close()
