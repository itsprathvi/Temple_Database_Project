from flask import Flask, render_template, request, redirect
import sqlite3
import os.path
import shortuuid

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
        amt = int(details["totalhidden"])
        gon = []
        gon.append(int(details["manga_count"]))
        gon.append(int(details["maha_count"]))
        gon.append(int(details["ashlesha_count"]))
        gon.append(int(details["karpura_count"]))
        gon.append(int(details["sarpa_count"]))
        gon.append(int(details["abhi_count"]))

        with sqlite3.connect(db_path) as connection:
            cursor = connection.cursor()
            Did = str(shortuuid.uuid())

            query1 = "INSERT INTO Data VALUES('{Date}','{Name}','{Did}')".format(
                Date=dat, Name=nam, Did=Did)
            cursor.execute(query1)
            connection.commit()

            query2 = "INSERT INTO AMT VALUES({Amount},'{RN}')".format(
                Amount=amt, RN=Did)
            cursor.execute(query2)
            connection.commit()

            for i, pooja in enumerate(gon):
                if pooja != 0:
                    query2 = "INSERT INTO maintable(Recieptno,Count,Poojaid) VALUES('{Recieptno}',{Count},{Poojaid})".format(
                        Recieptno=Did, Count=pooja, Poojaid=i)
                    cursor.execute(query2)
                    connection.commit()
            cursor.close()
            return redirect("/")
    else:
        return render_template("main.html")


@app.route("/users")
def users():
    with sqlite3.connect(db_path) as connection:
        cur = connection.cursor()
        cur.execute("SELECT Did,Date,Name,Count,Pooja FROM Data,maintable,typesofseeva WHERE Data.Did = maintable.Recieptno AND maintable.Poojaid = typesofseeva.Id")
        details = cur.fetchall()
        cur.execute("SELECT SUM(Amount) FROM AMT")
        tamt = str(cur.fetchone()[0])+" Rs"

        obj = {
            "details": details,
            "tamount": tamt,
        }

        return render_template("users.html", obj=obj)


@app.route("/list")
def list():
    with sqlite3.connect(db_path) as connection:
        cur = connection.cursor()
        cur.execute("SELECT Did,Date,Name,Count,Pooja,Amount FROM Data,maintable,typesofseeva,AMT WHERE Data.Did = maintable.Recieptno AND maintable.Poojaid = typesofseeva.Id AND Data.Did = AMT.RN")
        details = cur.fetchall()
        cur.execute("SELECT SUM(Amount) FROM AMT")
        tamt = str(cur.fetchone()[0])+" Rs"

        obj = {
            "details": details,
            "tamount": tamt,
        }

        return render_template("list.html", obj=obj)


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
                        "SELECT Did, Date, Name, Count, Pooja FROM Data, maintable, typesofseeva WHERE Data.Did=maintable.Recieptno AND maintable.Poojaid=typesofseeva.Id AND Name LIKE '%{n}%'".format(
                            n=name))
                    details = cu.fetchall()
                    return render_template("users.html", here=details)
            else:
                return "PLEASE ENTER VALUE!!!"
    except:
        return "SORRY!!! NO DATA AVAILABLE !!!"


@ app.route("/date", methods=["POST"])
def search1():
    try:
        if request.method == "POST":
            date = request.form["date"]
            yesdate = bool(date)
            if yesdate:
                with sqlite3.connect(db_path) as connection:
                    cu = connection.cursor()
                    cu.execute(
                        "SELECT Did, Date, Name, Count, Pooja,Amount FROM Data, maintable, typesofseeva,AMT WHERE Data.Did=maintable.Recieptno AND maintable.Poojaid=typesofseeva.Id AND Data.Did=AMT.RN AND Date LIKE '%{d}%'".format(d=date))
                    datedata = cu.fetchall()
                    return render_template("users.html", there=datedata)
            else:
                return "PLEASE ENTER VALUE!!!"
    except:
        return "SORRY!!! NO DATA AVAILABLE !!!"


if __name__ == "main":
    app.run(debug=True)
