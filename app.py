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
            connection.commit()
            cursor.close()
            return redirect("/")

    else:
        return render_template("main.html")


@app.route("/users")
def users():
    with sqlite3.connect(db_path) as connection:
        cur = connection.cursor()
        cur.execute("SELECT * FROM seeva")
        details = cur.fetchall()
        cur.execute("SELECT SUM(Amount) FROM seeva")
        tamt = str(cur.fetchone()[0])+" Rs"

        obj = {
            "details": details,
            "tamount": tamt,
        }

        return render_template("users.html", obj=obj)


@app.route("/users", methods=["POST"])
def search():
    try:
        if request.method == "POST":
            name = request.form["name"]
            yesname = bool(name)
            if yesname:
                with sqlite3.connect(db_path) as connection:
                    cu = connection.cursor()
                    cu.execute(
                        "SELECT * FROM seeva WHERE Name LIKE '%{n}%'".format(n=name))
                    details = cu.fetchall()
                    return render_template("users.html", here=details)
        else:
            return "NO Data Available!!!!"
    except:
        return "SORRY!!! NO DATA AVAILABLE !!!"


@app.route("/date", methods=["POST"])
def search1():
    try:
        if request.method == "POST":
            date = request.form["date"]
            yesdate = bool(date)
            if yesdate:
                with sqlite3.connect(db_path) as connection:
                    cu = connection.cursor()
                    cu.execute(
                        "SELECT * FROM seeva WHERE Date LIKE '%{d}%'".format(d=date))
                    datedata = cu.fetchall()
                    return render_template("users.html", there=datedata)
        else:
            return "NO Data Available!!!!"
    except:
        return "SORRY!!! NO DATA AVAILABLE !!!"


if __name__ == "main":
    app.run(debug=True)
