from flask import Flask,render_template
app=Flask(__name__,template_folder='/home/shri/hashnode/front',static_folder='/home/shri/hashnode/front/templates')
@app.route('/home')
def home():
    return render_template('home.html')
