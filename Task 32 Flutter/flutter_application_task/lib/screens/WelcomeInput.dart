import 'package:flutter/material.dart';
import 'package:hive/hive.dart';
import 'Products.dart';

class WelcomeInput extends StatefulWidget {
  const WelcomeInput({super.key});

  @override
  WelcomeInputState createState() => WelcomeInputState();
}

class WelcomeInputState extends State<WelcomeInput> {
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: EdgeInsets.all(30),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Image.asset(
              'images/logo.png',
              width: 140,
            ),
            SizedBox(height: 70),
            Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                Text(
                  "Login",
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 24),
                )
              ],
            ),
            SizedBox(height: 10),
            Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                Text(
                  "Sign in to your account",
                )
              ],
            ),
            SizedBox(height: 20),
            TextFormField(
              controller: _emailController,
              decoration: InputDecoration(
                labelText: "Email",
                suffixIcon: Icon(Icons.check_circle),
                border: OutlineInputBorder(),
              ),
            ),
            SizedBox(height: 20),
            TextFormField(
              controller: _passwordController,
              obscureText: true,
              decoration: InputDecoration(
                labelText: "Password",
                suffixIcon: Icon(Icons.password),
                border: OutlineInputBorder(),
              ),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: _login,
              child: Text("Login"),
              style: OutlinedButton.styleFrom(
                backgroundColor: Color.fromARGB(255, 248, 171, 171),
                minimumSize: Size(double.infinity, 50),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(50),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  void _login() {
    var box = Hive.box('userBox');
    String? email = box.get('email');
    String? password = box.get('password');

    print('Stored Email: $email');
    print('Stored Password: $password');
    print('Entered Email: ${_emailController.text}');
    print('Entered Password: ${_passwordController.text}');

    if (_emailController.text == email &&
        _passwordController.text == password) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Login successful')),
      );
      // Navigate to the Products screen
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => Products()),
      );
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Invalid email or password')),
      );
    }
  }

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }
}
