"use client"

import { useEffect } from "react"

const AdminPage = () => {
  useEffect(() => {
    window.location.href = "/admin/index.html"
  }, [])

  return <p>Redirecionando para o Netlify CMS...</p>
};

export default AdminPage