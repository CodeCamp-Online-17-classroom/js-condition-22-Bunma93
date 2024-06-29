// write code here
if (-1 || 0) alert('first');//-1(T) ทำงาน
if (-1 && 0) alert('second');//0(F) ไม่ทำงาน
if (null || (-1 && 1)) alert('third');// -1(T) and 1(T) คืนค่า 1(T) ออกมา ทำงาน