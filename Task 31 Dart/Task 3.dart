import 'dart:math' as math;
//1

void getName(String myName) {
  print("Your Name Is $myName");
}

//2
void evenNumbers(int num1, int num2) {
  for (num1; num1 <= num2; num1++) {
    print(num1);
  }
}

//3
void generateRandomPassword(int length) {
  const chars =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  String password = '';

  for (int i = 0; i < length; i++) {
    password += chars[math.Random().nextInt(chars.length)];
  }
  print('Generated Password: $password');
}

//4
double calculateAreaOfCircle(double radius) {
  return math.pi * math.pow(radius, 2);
}

//5
double calculateHypotenuse(double a, double b) {
  return math.sqrt(math.pow(a, 2) + math.pow(b, 2));
}

//6
String reverseString(String input) {
  return input.split('').reversed.join('');
}

//7
int calculatePower(int base, int exponent) {
  return math.pow(base, exponent).toInt();
}

void main() {
  getName('mahmoud akram');
  evenNumbers(1, 10);
  generateRandomPassword(12);
  print(calculateAreaOfCircle(5));
  print(calculateHypotenuse(3, 4));
  print(reverseString("hello my names is akram"));
  print(calculatePower(3, 2));
}
