from flask import Flask, redirect

app = Flask(__name__, static_folder='practice', static_url_path='/')

@app.route('/')
def homepage():
    return redirect('/example.html')


if __name__ == '__main__':
    app.run()