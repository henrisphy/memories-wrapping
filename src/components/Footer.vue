<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Memories Wrapping</h3>
          <p>
            Sebuah album digital untuk menyimpan kenangan berharga bersama
            keluarga dan teman-teman.
          </p>
        </div>

        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/family">Family</router-link></li>
            <li><router-link to="/friends">Friends</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Contact</h3>
          <p>Email: memories@example.com</p>
          <div class="social-icons">
            <a href="#" aria-label="Instagram">
              <i class="icon-instagram"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i class="icon-twitter"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i class="icon-facebook"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Memories Wrapping. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: #2c3e50;
  color: #fff;
  padding: 3rem 0 0;
  margin-top: auto;
}

.footer-container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #42b983;
}

.footer-section p {
  margin-bottom: 0.5rem;
  opacity: 0.8;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #fff;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.footer-section a:hover {
  opacity: 1;
  text-decoration: underline;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-icons a {
  display: inline-block;
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

.social-icons a:hover {
  background-color: #42b983;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 0;
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.7;
}

/* Ikon bisa diganti dengan library seperti Font Awesome */
.icon-instagram::before {
  content: "📷";
}
.icon-twitter::before {
  content: "🐦";
}
.icon-facebook::before {
  content: "👍";
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>
