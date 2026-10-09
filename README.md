# Graphic & Motion Graphic Portfolio Template

โครงสร้างและโค้ดตัวอย่างสำหรับเว็บไซต์ Portfolio งานสาย Graphic Design และ Motion Graphic จัดแยกตามสถานที่ทำงาน (Company / Workplace) โดยมีส่วนแสดงภาพนิ่ง (Graphic Design) และตามด้วยวิดีโอ (Motion Graphic)

---

## โครงสร้างไฟล์
- `index.html` — หน้าเว็บหลัก มีโครงสร้างแสดงผลงานแบ่งเป็นบริษัท แต่ละบริษัทมี 2 session ย่อย (รูปภาพ และ วิดีโอ)
- `style.css` — ธีมสไตล์ Dark Mode ดีไซน์โมเดิร์น เน้นขับภาพและวิดีโอให้โดดเด่น รองรับหน้าจอคอมพิวเตอร์และมือถือ
- `script.js` — สคริปต์ระบบ Lightbox คลิกดูภาพขยายใหญ่

---

## วิธีปรับแต่งและใส่ผลงานจริง

### 1. การใส่ภาพนิ่ง (Graphic Design Session)
ในแต่ละ `figure.gallery-item` เปลี่ยนจาก `.placeholder-image` เป็นแท็ก `<img>` เช่น:
```html
<figure class="gallery-item" onclick="openLightbox(this)">
  <div class="item-visual">
    <img src="images/company1-project1.jpg" alt="Key Visual">
  </div>
  <figcaption class="item-info">
    <h4>Brand Key Visual</h4>
    <p>Branding / Campaign Key Visual</p>
  </figcaption>
</figure>
```

### 2. การใส่วิดีโอ (Motion Graphic Session)
ใน `.video-wrapper` สามารถเลือกใส่ได้ทั้ง:
- **HTML5 Video (ไฟล์ .mp4 หรือ .webm):**
  ```html
  <video controls poster="images/thumbnail.jpg">
    <source src="videos/motion-teaser.mp4" type="video/mp4">
  </video>
  ```
- **Embed จาก Vimeo หรือ YouTube:**
  ```html
  <iframe src="https://player.vimeo.com/video/XXXXXX?badge=0&autopause=0&player_id=0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  ```

### 3. การเพิ่มสถานที่ทำงานใหม่
คัดลอกบล็อก `<article class="workplace-card">...</article>` ใน `index.html` แล้วเปลี่ยนชื่อบริษัท ปีที่ทำงาน บทบาทหน้าที่ และรายการผลงานตามต้องการ
