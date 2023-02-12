from flask import Flask, render_template
import sqlite3


app = Flask(__name__)


@app.route('/')
def create_task():
    conn = sqlite3.connect("C:/Users/Clovn/PycharmProjects/bot_1c/Data.db")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM cars")
    cars = [list(i) for i in cursor.fetchall()]
    cursor.execute("SELECT * FROM autoservices")
    services = [list(i) for i in cursor.fetchall()]
    conn.close()
    return render_template('index.html', cars=cars, services=services)


if __name__ == '__main__':
    app.run()
