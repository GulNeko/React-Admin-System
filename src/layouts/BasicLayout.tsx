import { Outlet, Link } from 'react-router-dom';

export default function BasicLayout() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', margin: 0, fontFamily: 'sans-serif' }}>
      <aside style={{ width: 200, padding: 20, background: '#f0f2f5', borderRight: '1px solid #e8e8e8' }}>
        <h3>中后台系统</h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20 }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>仪表盘</Link>
          <Link to="/users" style={{ textDecoration: 'none', color: '#333' }}>用户管理</Link>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: 20, background: '#fff' }}>
        <Outlet />
      </main>
    </div>
  );
}
