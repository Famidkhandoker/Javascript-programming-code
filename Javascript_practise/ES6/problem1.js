//1. তুই এমন একটি ফাংশন লিখবি যেখানে টাকা জমা দেওয়ার সুযোগ থাকবে। যদি কোনো টাকার পরিমাণ না দেওয়া হয়, তাহলে জমা হিসেবে ডিফল্ট ৫০ টাকা দেখাবে।

// const savings = (amount = 50) => console.log(`তোর জমা: ${amount} টাকা`);
// savings();

const savings = (amount = 50) =>{
     console.log(`তোর জমা: ${amount} টাকা`);
};
savings();