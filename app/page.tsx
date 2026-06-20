import Image from "next/image";
import { Coffee, WashingMachine, Truck, MapPin, Gift, Phone } from "lucide-react";

const branches = [
  { name: "Reforma, Oaxaca", text: "Orange Coffee & Laundry Reforma", address: "Av. Fuerza Aerea Mexicana 501, Col. Reforma, C.P. 68050, Oaxaca de Juárez, Oaxaca" },
  { name: "Puerto Escondido", text: "Orange Coffee & Laundry Puerto Escondido", address: "Av. Guelatao esq Av Montealban SN, Fracc. Bacocho, C.P. 71983, Puerto Escondido, Oaxaca" },
  { name: "Huatulco", text: "California Laundry Huatulco", address: "Av. Salina Cruz SN, Sector M, C.P. 70987, Bahias de Huatulco, Oaxaca" },
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <Image src="/logo-orange.png" alt="Orange Coffee & Laundry" width={230} height={175} priority />
        <nav>
          <a href="#servicios">Servicios</a>
          <a href="#puntos">Orange Puntos</a>
          <a href="#sucursales">Sucursales</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">Lavandería · Cafetería · Comunidad</p>
          <h1>Lava, seca y disfruta un café.</h1>
          <p>En Orange Coffee & Laundry hacemos que lavar sea más rápido, cómodo y agradable. Visítanos en nuestras sucursales o consulta el servicio a domicilio.</p>
          <div className="actions">
            <a className="btn primary" href="https://wa.me/529542180054">WhatsApp</a>
            <a className="btn dark" href="#puntos">Ver Orange Puntos</a>
          </div>
        </div>
        <div className="heroCard">
          <Coffee size={54} />
          <h2>Más que servicios, creamos experiencias.</h2>
          <p>Café, lavandería y beneficios para clientes frecuentes.</p>
        </div>
      </section>

      <section id="servicios" className="section">
        <h2>Nuestros servicios</h2>
        <div className="grid3">
          <article className="card"><WashingMachine /><h3>Lavandería</h3><p>Servicio práctico, rápido y cómodo para tu ropa.</p></article>
          <article className="card"><Coffee /><h3>Cafetería</h3><p>Bebidas calientes, frías y productos seleccionados.</p></article>
          <article className="card"><Truck /><h3>Servicio a domicilio</h3><p>Consulta disponibilidad de recolección y entrega por sucursal.</p></article>
        </div>
      </section>

      <section id="puntos" className="points">
        <div>
          <p className="eyebrow orange">Programa de lealtad</p>
          <h2>Orange Puntos</h2>
          <p><b>Acumula el 8% de todas tus compras.</b></p>
          <p>1 Punto = $1 MXN para canjear en lavandería, cafetería y productos participantes.</p>
          <p className="small">Tus puntos se reinician cada 1 de enero. Úsalos antes de que termine el año.</p>
        </div>
        <div className="examples">
          <div><span>Compra</span><span>Puntos</span><span>Valor</span></div>
          <div><span>$100</span><span>8</span><span>$8</span></div>
          <div><span>$250</span><span>20</span><span>$20</span></div>
          <div><span>$500</span><span>40</span><span>$40</span></div>
          <div><span>$1,000</span><span>80</span><span>$80</span></div>
        </div>
      </section>

      <section id="sucursales" className="section">
        <h2>Sucursales</h2>
        <div className="grid3">
          {branches.map((b) => (
            <article className="branch" key={b.name}>
              <MapPin />
              <h3>{b.name}</h3>
              <p>{b.text}</p>
              <p className="branch-address">{b.address}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="cta">
        <Gift size={46} />
        <h2>Únete a la familia Orange</h2>
        <p>Escríbenos para promociones, horarios, sucursales y Orange Puntos.</p>
        <a className="btn dark" href="https://wa.me/529542180054"><Phone size={18}/> 954 218 0054</a>
      </section>

      <footer>
        <p>Orange Coffee & Laundry © 2026</p>
        <p>contacto@orangelaundry.com.mx · @orange.laundry.reforma</p>
      </footer>
    </main>
  );
}
