from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("books.html")

@app.route("/success")
def success():
    return """
    <h1>✅ Payment Successful! Your book is ready.</h1>
    <p>Click below to download:</p>
    <a href='/download-book' class="btn">📖 Download Book</a>
    <a href='/download-summary' class="btn">📝 Download Summary</a>
    """

@app.route("/download-book")
def download_book():
    return send_from_directory("assets/books", "7-Habits.pdf", as_attachment=True)

@app.route("/download-summary")
def download_summary():
    return send_from_directory("assets/books", "7-Habits-Summary.docx", as_attachment=True)

@app.route("/cancel")
def cancel():
    return "<h1>❌ Payment Cancelled! Try again if needed.</h1>"

@app.route("/notify", methods=["POST"])
def notify():
    return "Payment received", 200

if __name__ == "__main__":
    app.run(debug=True)