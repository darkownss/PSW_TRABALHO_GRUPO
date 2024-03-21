import './App.css';

function Footer() {

  return (
    <footer class="footer mt-auto py-3 bg-body-tertiary">
      <div class="container">
      <p class="col-md-4 mb-0 text-body-secondary">&copy; 2024 Company, Inc</p>

      <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
      </ul>
      </div>
    </footer>
  );
}

export default Footer;