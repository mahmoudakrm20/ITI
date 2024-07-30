import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class SignUp extends StatefulWidget {
  const SignUp({super.key});

  @override
  SignUpState createState() => SignUpState();
}

class SignUpState extends State<SignUp> {
  bool _termsAccepted = false;

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
                  "Sign up",
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 24),
                )
              ],
            ),
            SizedBox(height: 10),
            Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                Text(
                  "Create a new account",
                )
              ],
            ),
            SizedBox(height: 20),
            TextFormField(
                decoration: InputDecoration(
                    labelText: "User Name",
                    suffixIcon: Icon(Icons.check_circle),
                    border: OutlineInputBorder())),
            SizedBox(height: 20),
            TextFormField(
                decoration: InputDecoration(
                    labelText: "Email",
                    suffixIcon: Icon(Icons.check_circle),
                    border: OutlineInputBorder())),
            SizedBox(height: 20),
            TextFormField(
                obscureText: true,
                decoration: InputDecoration(
                    labelText: "Password",
                    suffixIcon: Icon(Icons.password),
                    border: OutlineInputBorder())),
            SizedBox(height: 20),
            TextFormField(
                obscureText: true,
                decoration: InputDecoration(
                    labelText: "Confirm Password",
                    suffixIcon: Icon(Icons.password),
                    border: OutlineInputBorder())),
            SizedBox(height: 20),
            Row(
              children: [
                Checkbox(
                  value: _termsAccepted,
                  onChanged: (bool? value) {
                    setState(() {
                      _termsAccepted = value!;
                    });
                  },
                ),
                Expanded(
                  child: Text(
                    "Agree to our terms",
                    overflow: TextOverflow.ellipsis,
                  ),
                ),
              ],
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: _termsAccepted
                  ? () {
                      // Add your sign up logic here
                    }
                  : null,
              child: Text("Sign Up"),
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
}
