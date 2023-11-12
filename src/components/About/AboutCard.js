import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            สวัสดีครับผม <span className="purple">ปริญ จันทร์สิน</span> อาศัยอยู่ที่ <span className="purple">กรุงเทพมหานคร</span> 
            ฝั่งธนบุรี เป็นนักศึกษาจากมหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ<br/>สาขาเทคโนโลยีวิศวกรรมอิเล็กทรอนิกส์
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
