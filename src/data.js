const data = [
  { word: "你好", viet: "Xin chào", pronouce: "nǐ hǎo" },
  { word: "谢谢", viet: "Cảm ơn", pronouce: "xièxie" },
  { word: "不客气", viet: "Không có gì", pronouce: "bú kèqi" },
  { word: "再见", viet: "Tạm biệt", pronouce: "zàijiàn" },
  { word: "请", viet: "Làm ơn / Mời", pronouce: "qǐng" },
  { word: "对不起", viet: "Xin lỗi", pronouce: "duìbuqǐ" },
  { word: "没关系", viet: "Không sao", pronouce: "méiguānxi" },
  { word: "是", viet: "Là", pronouce: "shì" },
  { word: "有", viet: "Có", pronouce: "yǒu" },
  { word: "我", viet: "Tôi", pronouce: "wǒ" },
  { word: "你", viet: "Bạn", pronouce: "nǐ" },
  { word: "他", viet: "Anh ấy", pronouce: "tā" },
  { word: "她", viet: "Cô ấy", pronouce: "tā" },
  { word: "我们", viet: "Chúng tôi", pronouce: "wǒmen" },
  { word: "他们", viet: "Họ", pronouce: "tāmen" },
  { word: "这", viet: "Cái này", pronouce: "zhè" },
  { word: "那", viet: "Cái kia", pronouce: "nà" },
  { word: "哪", viet: "Cái nào", pronouce: "nǎ" },
  { word: "谁", viet: "Ai", pronouce: "shéi" },
  { word: "什么", viet: "Cái gì", pronouce: "shénme" },
  { word: "哪里", viet: "Ở đâu", pronouce: "nǎlǐ" },
  { word: "怎么", viet: "Như thế nào", pronouce: "zěnme" },
  { word: "几", viet: "Mấy", pronouce: "jǐ" },
  { word: "岁", viet: "Tuổi", pronouce: "suì" },
  { word: "月", viet: "Tháng", pronouce: "yuè" },
  { word: "日", viet: "Ngày", pronouce: "rì" },
  { word: "今天", viet: "Hôm nay", pronouce: "jīntiān" },
  { word: "明天", viet: "Ngày mai", pronouce: "míngtiān" },
  { word: "昨天", viet: "Hôm qua", pronouce: "zuótiān" },
  { word: "上午", viet: "Buổi sáng", pronouce: "shàngwǔ" },
  { word: "中午", viet: "Buổi trưa", pronouce: "zhōngwǔ" },
  { word: "下午", viet: "Buổi chiều", pronouce: "xiàwǔ" },
  { word: "现在", viet: "Bây giờ", pronouce: "xiànzài" },
  { word: "点", viet: "Giờ", pronouce: "diǎn" },
  { word: "分钟", viet: "Phút", pronouce: "fēnzhōng" },
  { word: "爸爸", viet: "Bố", pronouce: "bàba" },
  { word: "妈妈", viet: "Mẹ", pronouce: "māma" },
  { word: "儿子", viet: "Con trai", pronouce: "érzi" },
  { word: "女儿", viet: "Con gái", pronouce: "nǚ'ér" },
  { word: "老师", viet: "Giáo viên", pronouce: "lǎoshī" },
  { word: "学生", viet: "Học sinh", pronouce: "xuésheng" },
  { word: "医生", viet: "Bác sĩ", pronouce: "yīshēng" },
  { word: "朋友", viet: "Bạn bè", pronouce: "péngyou" },
  { word: "学校", viet: "Trường học", pronouce: "xuéxiào" },
  { word: "商店", viet: "Cửa hàng", pronouce: "shāngdiàn" },
  { word: "医院", viet: "Bệnh viện", pronouce: "yīyuàn" },
  { word: "饭店", viet: "Nhà hàng", pronouce: "fàndiàn" },
  { word: "家", viet: "Nhà", pronouce: "jiā" },
  { word: "猫", viet: "Mèo", pronouce: "māo" },
  { word: "狗", viet: "Chó", pronouce: "gǒu" },
  { word: "水", viet: "Nước", pronouce: "shuǐ" },
  { word: "茶", viet: "Trà", pronouce: "chá" },
  { word: "米饭", viet: "Cơm", pronouce: "mǐfàn" },
  { word: "水果", viet: "Trái cây", pronouce: "shuǐguǒ" },
  { word: "苹果", viet: "Táo", pronouce: "píngguǒ" },
  { word: "杯子", viet: "Cái cốc", pronouce: "bēizi" },
  { word: "电脑", viet: "Máy tính", pronouce: "diànnǎo" },
  { word: "电视", viet: "TV", pronouce: "diànshì" },
  { word: "电话", viet: "Điện thoại", pronouce: "diànhuà" },
  { word: "椅子", viet: "Cái ghế", pronouce: "yǐzi" },
  { word: "桌子", viet: "Cái bàn", pronouce: "zhuōzi" },
  { word: "书", viet: "Sách", pronouce: "shū" },
  { word: "看", viet: "Nhìn / Xem", pronouce: "kàn" },
  { word: "听", viet: "Nghe", pronouce: "tīng" },
  { word: "说", viet: "Nói", pronouce: "shuō" },
  { word: "读", viet: "Đọc", pronouce: "dú" },
  { word: "写", viet: "Viết", pronouce: "xiě" },
  { word: "看见", viet: "Nhìn thấy", pronouce: "kànjiàn" },
  { word: "叫", viet: "Gọi là", pronouce: "jiào" },
  { word: "来", viet: "Đến", pronouce: "lái" },
  { word: "回", viet: "Trở về", pronouce: "huí" },
  { word: "去", viet: "Đi", pronouce: "qù" },
  { word: "吃", viet: "Ăn", pronouce: "chī" },
  { word: "喝", viet: "Uống", pronouce: "hē" },
  { word: "睡觉", viet: "Ngủ", pronouce: "shuìjiào" },
  { word: "做", viet: "Làm", pronouce: "zuò" },
  { word: "打电话", viet: "Gọi điện thoại", pronouce: "dǎ diànhuà" },
  { word: "买", viet: "Mua", pronouce: "mǎi" },
  { word: "开", viet: "Mở", pronouce: "kāi" },
  { word: "坐", viet: "Ngồi", pronouce: "zuò" },
  { word: "住", viet: "Sống, ở", pronouce: "zhù" },
  { word: "学习", viet: "Học", pronouce: "xuéxí" },
  { word: "工作", viet: "Làm việc", pronouce: "gōngzuò" },
  { word: "下雨", viet: "Trời mưa", pronouce: "xià yǔ" },
  { word: "爱", viet: "Yêu", pronouce: "ài" },
  { word: "喜欢", viet: "Thích", pronouce: "xǐhuan" },
  { word: "认识", viet: "Biết (ai đó)", pronouce: "rènshi" },
  { word: "会", viet: "Có thể / Biết", pronouce: "huì" },
  { word: "能", viet: "Có thể", pronouce: "néng" },
  { word: "太", viet: "Quá", pronouce: "tài" },
  { word: "很", viet: "Rất", pronouce: "hěn" },
  { word: "也", viet: "Cũng", pronouce: "yě" },
  { word: "都", viet: "Đều", pronouce: "dōu" },
  { word: "的", viet: "Của", pronouce: "de" },
  { word: "了", viet: "Rồi", pronouce: "le" },
  { word: "和", viet: "Và", pronouce: "hé" },
  { word: "在", viet: "Ở", pronouce: "zài" },
  { word: "呢", viet: "Thì sao?", pronouce: "ne" },
  { word: "吗", viet: "Không? (trợ từ)", pronouce: "ma" },
  { word: "喂", viet: "A lô", pronouce: "wèi" },
];
export default data;
