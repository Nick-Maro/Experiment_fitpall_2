@app.route('/register', methods=['POST'])
def register():
    username = request.form['username']
    password = request.form['password']  # Ottieni la password dal form

    if db.session.query(User).filter_by(username=username).first() is not None:
        return 'User already exists', 400

    new_user = User(username=username)
    new_user.set_password(password)  # Hash della password
    db.session.add(new_user)
    db.session.commit()

    return 'User registered successfully', 201
@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']  # Ottieni la password dal form

    user = db.session.query(User).filter_by(username=username).first()

    if user is None or not user.check_password(password):
        return 'Invalid username or password', 401

    # Login corretto: gestisci sessione o token JWT
    return 'Login successful', 200