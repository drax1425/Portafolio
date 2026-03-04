import React, { useState } from 'react';
import './LocalPOSLanding.css';

const strings = {
    en: {
        hero: {
            badge: 'Mobile POS Application',
            title: 'LocalPOS',
            subtitle: 'The smartest point of sale for food carts in Chile',
            description: 'Manage sales, calculate taxes automatically, print Bluetooth receipts, and track your business — all from your phone, even offline.',
            cta: 'Contact for Demo',
            ctaSecondary: 'View Features'
        },
        features: {
            heading: 'Everything you need to sell',
            items: [
                { icon: '🛒', title: 'Point of Sale', desc: 'Intuitive POS with product search, categories, and one-tap ordering. Build orders fast.' },
                { icon: '💰', title: 'Auto VAT (19%)', desc: 'Automatic IVA calculation for every sale. Prices with or without tax included — you choose.' },
                { icon: '🖨️', title: 'Bluetooth Printing', desc: 'Print thermal receipts wirelessly via Bluetooth. Compatible with 58mm and 80mm printers.' },
                { icon: '📊', title: 'Sales Reports', desc: 'Daily and monthly summaries. Track revenue, taxes, and transaction count in real time.' },
                { icon: '📋', title: 'F29 Ready', desc: 'Monthly tax summary formatted for Chile\'s F29 declaration. Export to Excel anytime.' },
                { icon: '📱', title: 'Works Offline', desc: 'Local SQLite database means you never lose a sale — even without internet.' },
                { icon: '💳', title: 'Multiple Payments', desc: 'Accept cash, card, or bank transfer. Full payment flexibility for your customers.' },
                { icon: '🍔', title: 'Product Management', desc: 'Organize products by category, set prices, toggle IVA — full catalog control.' }
            ]
        },
        screens: {
            heading: 'Built for speed',
            subtitle: 'A clean, dark interface designed for one-handed use in fast-paced environments.',
            tabs: ['Home', 'POS', 'Reports', 'Settings']
        },
        tech: {
            heading: 'Built with',
            items: ['React Native', 'TypeScript', 'Expo', 'SQLite', 'Bluetooth ESC/POS']
        },
        cta: {
            heading: 'Ready to streamline your sales?',
            description: 'Contact us for a demo, pricing, or custom features for your business.',
            button: 'Get in Touch'
        },
        back: '← Back to Portfolio'
    },
    es: {
        hero: {
            badge: 'Aplicación POS Móvil',
            title: 'LocalPOS',
            subtitle: 'El punto de venta más inteligente para carritos de comida en Chile',
            description: 'Gestiona ventas, calcula impuestos automáticamente, imprime boletas por Bluetooth y controla tu negocio — todo desde tu celular, incluso sin internet.',
            cta: 'Contactar para Demo',
            ctaSecondary: 'Ver Características'
        },
        features: {
            heading: 'Todo lo que necesitas para vender',
            items: [
                { icon: '🛒', title: 'Punto de Venta', desc: 'POS intuitivo con búsqueda de productos, categorías y pedidos con un toque.' },
                { icon: '💰', title: 'IVA Automático (19%)', desc: 'Cálculo automático de IVA en cada venta. Precios con o sin impuesto incluido — tú eliges.' },
                { icon: '🖨️', title: 'Impresión Bluetooth', desc: 'Imprime boletas térmicas inalámbricamente. Compatible con impresoras de 58mm y 80mm.' },
                { icon: '📊', title: 'Reportes de Ventas', desc: 'Resúmenes diarios y mensuales. Rastrea ingresos, impuestos y transacciones en tiempo real.' },
                { icon: '📋', title: 'Listo para F29', desc: 'Resumen mensual de impuestos formateado para la declaración F29 de Chile. Exporta a Excel.' },
                { icon: '📱', title: 'Funciona Sin Internet', desc: 'Base de datos SQLite local — nunca pierdas una venta, incluso sin conexión.' },
                { icon: '💳', title: 'Múltiples Pagos', desc: 'Acepta efectivo, tarjeta o transferencia bancaria. Flexibilidad total para tus clientes.' },
                { icon: '🍔', title: 'Gestión de Productos', desc: 'Organiza productos por categoría, configura precios, activa IVA — control total del catálogo.' }
            ]
        },
        screens: {
            heading: 'Diseñado para la velocidad',
            subtitle: 'Una interfaz oscura y limpia, diseñada para uso con una sola mano en entornos de ritmo rápido.',
            tabs: ['Inicio', 'POS', 'Reportes', 'Ajustes']
        },
        tech: {
            heading: 'Construido con',
            items: ['React Native', 'TypeScript', 'Expo', 'SQLite', 'Bluetooth ESC/POS']
        },
        cta: {
            heading: '¿Listo para optimizar tus ventas?',
            description: 'Contáctanos para una demo, precios o funciones personalizadas para tu negocio.',
            button: 'Contactar'
        },
        back: '← Volver al Portafolio'
    }
};

// CSS-based phone mockup screens data
const screenData = {
    home: {
        items: [
            { icon: '🛒', title: 'Nueva Venta', sub: 'Tomar un nuevo pedido', color: '#6366f1' },
            { icon: '📊', title: 'Ventas del Día', sub: 'Resumen de hoy', color: '#10b981' },
            { icon: '📅', title: 'Resumen Mensual', sub: 'IVA débito fiscal', color: '#f59e0b' },
            { icon: '📋', title: 'Historial', sub: 'Ventas registradas', color: '#8b5cf6' },
            { icon: '🍔', title: 'Productos', sub: 'Gestionar catálogo', color: '#ec4899' },
            { icon: '⚙️', title: 'Configuración', sub: 'IVA, impresora y más', color: '#94a3b8' },
        ]
    },
    pos: {
        categories: ['Todos', 'Completos', 'Bebidas', 'Extras'],
        products: [
            { name: 'Completo Italiano', price: '$2.500' },
            { name: 'Churrasquería', price: '$3.200' },
            { name: 'Bebida 500ml', price: '$1.000' },
        ],
        order: { items: 2, neto: '$4.622', iva: '$878', total: '$5.500' }
    },
    reports: {
        title: 'Ventas de Hoy',
        stats: [
            { label: 'Total Ventas', value: '$45.800', color: '#6366f1' },
            { label: 'IVA Recaudado', value: '$7.319', color: '#f59e0b' },
            { label: 'Transacciones', value: '12', color: '#10b981' },
        ]
    },
    settings: {
        items: [
            { icon: '🏪', label: 'Nombre del Negocio', value: 'Mi Carrito' },
            { icon: '🧾', label: 'IVA incluido', value: 'Sí' },
            { icon: '🖨️', label: 'Impresora', value: 'Conectada' },
            { icon: '📄', label: 'Auto-imprimir', value: 'Sí' },
        ]
    }
};

function PhoneMockup({ activeTab }) {
    return (
        <div className="phone-frame">
            <div className="phone-notch"></div>
            <div className="phone-screen">
                {activeTab === 0 && (
                    <div className="mock-home">
                        <div className="mock-header">
                            <span className="mock-greeting">¡Bienvenido!</span>
                            <span className="mock-business">Mi Carrito de Comida</span>
                        </div>
                        <div className="mock-menu">
                            {screenData.home.items.map((item, i) => (
                                <div className="mock-menu-item" key={i}>
                                    <div className="mock-icon-wrap" style={{ background: item.color + '20' }}>
                                        <span>{item.icon}</span>
                                    </div>
                                    <div className="mock-item-text">
                                        <span className="mock-item-title">{item.title}</span>
                                        <span className="mock-item-sub">{item.sub}</span>
                                    </div>
                                    <span className="mock-arrow">›</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 1 && (
                    <div className="mock-pos">
                        <div className="mock-search">
                            <span>🔍 Buscar producto...</span>
                        </div>
                        <div className="mock-categories">
                            {screenData.pos.categories.map((cat, i) => (
                                <span key={i} className={`mock-cat${i === 0 ? ' active' : ''}`}>{cat}</span>
                            ))}
                        </div>
                        <div className="mock-products">
                            {screenData.pos.products.map((p, i) => (
                                <div className="mock-product" key={i}>
                                    <span className="mock-prod-name">{p.name}</span>
                                    <span className="mock-prod-price">{p.price}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mock-order">
                            <div className="mock-order-header">
                                <span>Pedido</span>
                                <span>{screenData.pos.order.items} items</span>
                            </div>
                            <div className="mock-totals">
                                <div className="mock-total-row">
                                    <span>Neto</span><span>{screenData.pos.order.neto}</span>
                                </div>
                                <div className="mock-total-row">
                                    <span>IVA (19%)</span><span>{screenData.pos.order.iva}</span>
                                </div>
                                <div className="mock-total-row final">
                                    <span>TOTAL</span><span>{screenData.pos.order.total}</span>
                                </div>
                            </div>
                            <div className="mock-cobrar-btn">💵 Cobrar</div>
                        </div>
                    </div>
                )}

                {activeTab === 2 && (
                    <div className="mock-reports">
                        <div className="mock-report-title">{screenData.reports.title}</div>
                        <div className="mock-stats">
                            {screenData.reports.stats.map((s, i) => (
                                <div className="mock-stat-card" key={i} style={{ borderLeftColor: s.color }}>
                                    <span className="mock-stat-label">{s.label}</span>
                                    <span className="mock-stat-value">{s.value}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mock-chart-placeholder">
                            <div className="mock-bar" style={{ height: '60%' }}></div>
                            <div className="mock-bar" style={{ height: '80%' }}></div>
                            <div className="mock-bar" style={{ height: '45%' }}></div>
                            <div className="mock-bar" style={{ height: '90%' }}></div>
                            <div className="mock-bar" style={{ height: '70%' }}></div>
                            <div className="mock-bar" style={{ height: '55%' }}></div>
                            <div className="mock-bar" style={{ height: '75%' }}></div>
                        </div>
                    </div>
                )}

                {activeTab === 3 && (
                    <div className="mock-settings">
                        <div className="mock-settings-title">Configuración</div>
                        {screenData.settings.items.map((s, i) => (
                            <div className="mock-setting-item" key={i}>
                                <span className="mock-setting-icon">{s.icon}</span>
                                <span className="mock-setting-label">{s.label}</span>
                                <span className="mock-setting-value">{s.value}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default function LocalPOSLanding({ lang = 'es', onBack }) {
    const [activeTab, setActiveTab] = useState(0);
    const t = strings[lang];

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="landing">
            {/* Top bar */}
            <nav className="landing-nav">
                <div className="landing-nav-inner">
                    <button className="landing-back" onClick={onBack}>{t.back}</button>
                    <span className="landing-logo">LocalPOS</span>
                </div>
            </nav>

            {/* Hero */}
            <section className="landing-hero">
                <div className="landing-hero-bg"></div>
                <div className="landing-hero-content">
                    <div className="landing-hero-text">
                        <span className="landing-badge">{t.hero.badge}</span>
                        <h1>{t.hero.title}</h1>
                        <p className="landing-hero-subtitle">{t.hero.subtitle}</p>
                        <p className="landing-hero-desc">{t.hero.description}</p>
                        <div className="landing-hero-buttons">
                            <button className="btn-landing-primary" onClick={() => scrollTo('landing-cta')}>
                                {t.hero.cta}
                            </button>
                            <button className="btn-landing-secondary" onClick={() => scrollTo('landing-features')}>
                                {t.hero.ctaSecondary}
                            </button>
                        </div>
                    </div>
                    <div className="landing-hero-phone">
                        <PhoneMockup activeTab={0} />
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="landing-features" id="landing-features">
                <div className="landing-container">
                    <h2>{t.features.heading}</h2>
                    <div className="landing-features-grid">
                        {t.features.items.map((f, i) => (
                            <div className="landing-feature-card" key={i}>
                                <span className="landing-feature-icon">{f.icon}</span>
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* App Preview */}
            <section className="landing-preview">
                <div className="landing-container">
                    <h2>{t.screens.heading}</h2>
                    <p className="landing-preview-subtitle">{t.screens.subtitle}</p>
                    <div className="landing-preview-tabs">
                        {t.screens.tabs.map((tab, i) => (
                            <button
                                key={i}
                                className={`preview-tab${activeTab === i ? ' active' : ''}`}
                                onClick={() => setActiveTab(i)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="landing-preview-phone">
                        <PhoneMockup activeTab={activeTab} />
                    </div>
                </div>
            </section>

            {/* Tech */}
            <section className="landing-tech">
                <div className="landing-container">
                    <h2>{t.tech.heading}</h2>
                    <div className="landing-tech-list">
                        {t.tech.items.map((tech, i) => (
                            <span className="landing-tech-badge" key={i}>{tech}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="landing-cta-section" id="landing-cta">
                <div className="landing-container">
                    <h2>{t.cta.heading}</h2>
                    <p>{t.cta.description}</p>
                    <button className="btn-landing-primary large" onClick={onBack}>
                        {t.cta.button}
                    </button>
                </div>
            </section>
        </div>
    );
}
