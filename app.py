from sqlite3.dbapi2 import Cursor
from flask import Flask, render_template, request, redirect
import sqlite3
import os.path

currentdirectory = os.path.dirname(os.path.abspath(__file__))
db_path = os.path.join(currentdirectory, "counter.db")

app = Flask(__name__)


@app.route("/")
def main():
    return render_template("main.html")


@app.route("/", methods=["POST"])
def counter():
    if request.method == "POST":

        details = request.form
        dat = details["date"]
        nam = details["name"]
        num = details["count"]
        tyseeva = details["tyseeva"]
        amount = details["amount"]

        with sqlite3.connect(db_path) as connection:
            cursor = connection.cursor()
            query1 = "INSERT INTO seeva VALUES('{Date}','{Name}',{Number},'{Type}',{Amount})".format(
                Date=dat, Name=nam, Number=num, Type=tyseeva, Amount=amount)
            cursor.execute(query1)
            # cursor.fetchall()
            connection.commit()
            cursor.close()
            return redirect("/")

    else:
        return render_template("main.html")


@app.route("/users")
def users():
    with sqlite3.connect(db_path) as connection:
        cur = connection.cursor()
        resultValue = cur.execute("SELECT * FROM seeva")
        details = cur.fetchall()
        return render_template("users.html", details=details)
       # return 'ERROR'


if __name__ == "main":
    app.run(debug=True)
