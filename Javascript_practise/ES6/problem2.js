//2. এমন একটি ফাংশন তৈরি কর, যা দুইটা নাম নিবে। যদি নাম না দেওয়া হয়, তাহলে ডিফল্ট হিসেবে প্রথম বন্ধু আর দ্বিতীয় বন্ধুর নাম দেখাবে। এই ফাংশনটা Arrow function দিয়ে লিখিস।
const greetFriends = (friend1 = "প্রথম বন্ধু", friend2 = "দ্বিতীয় বন্ধু") => {
    console.log(`তোর বন্ধুরা: ${friend1}, ${friend2}`);
  };
  greetFriends();