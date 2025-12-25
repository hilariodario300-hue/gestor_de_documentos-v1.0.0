import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();

  const activeLink = (path) =>
    router.pathname.indexOf(path) !== -1
      ? "text-lightBlue-500 hover:text-lightBlue-600"
      : "text-blueGray-700 hover:text-blueGray-500";

  const activeIcon = (path) =>
    router.pathname.indexOf(path) !== -1
      ? "opacity-75"
      : "text-blueGray-300";

  return (
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">

        {/* Mobile toggle */}
        <button
          className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl"
          onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Brand */}
        <Link
          href="/admin/dashboard"
          className="md:block text-left text-blueGray-600 text-sm uppercase font-bold p-4 px-0"
        >
          Kalandula Docs
        </Link>

        {/* Mobile user */}
        <ul className="md:hidden flex items-center list-none">
          <li><NotificationDropdown /></li>
          <li><UserDropdown /></li>
        </ul>

        {/* Sidebar content */}
        <div className={`md:flex md:flex-col md:opacity-100 md:relative md:mt-4 absolute top-0 left-0 right-0 z-40 overflow-y-auto h-auto flex-1 rounded ${collapseShow}`}>

          {/* ADMINISTRAÇÃO */}
          <h6 className="text-blueGray-500 text-xs uppercase font-bold pt-4 pb-2">
            Administração
          </h6>

          <ul className="flex flex-col list-none">
            <li>
              <Link href="/admin/dashboard" className={`text-xs uppercase py-3 font-bold block ${activeLink("/admin/dashboard")}`}>
                <i className={`fas fa-chart-line mr-2 ${activeIcon("/admin/dashboard")}`}></i>
                Dashboard
              </Link>
            </li>

            <li>
              <Link href="/admin/usuarios" className={`text-xs uppercase py-3 font-bold block ${activeLink("/admin/usuarios")}`}>
                <i className={`fas fa-users mr-2 ${activeIcon("/admin/usuarios")}`}></i>
                Usuários
              </Link>
            </li>

            <li>
              <Link href="/admin/departamentos" className={`text-xs uppercase py-3 font-bold block ${activeLink("/admin/departamentos")}`}>
                <i className={`fas fa-building mr-2 ${activeIcon("/admin/departamentos")}`}></i>
                Departamentos
              </Link>
            </li>
          </ul>

          <hr className="my-4" />

          {/* DOCUMENTOS */}
          <h6 className="text-blueGray-500 text-xs uppercase font-bold pb-2">
            Gestão de Documentos
          </h6>

          <ul className="flex flex-col list-none">
            <li>
              <Link href="/documentos" className={`text-xs uppercase py-3 font-bold block ${activeLink("/documentos")}`}>
                <i className={`fas fa-folder-open mr-2 ${activeIcon("/documentos")}`}></i>
                Arquivo Digital
              </Link>
            </li>

            <li>
              <Link href="/documentos/novo" className={`text-xs uppercase py-3 font-bold block ${activeLink("/documentos/novo")}`}>
                <i className={`fas fa-file-upload mr-2 ${activeIcon("/documentos/novo")}`}></i>
                Novo Documento
              </Link>
            </li>

            <li>
              <Link href="/documentos/tipos" className={`text-xs uppercase py-3 font-bold block ${activeLink("/documentos/tipos")}`}>
                <i className={`fas fa-tags mr-2 ${activeIcon("/documentos/tipos")}`}></i>
                Tipos de Documento
              </Link>
            </li>
          </ul>

          <hr className="my-4" />

          {/* ÁREA ACADÉMICA */}
          <h6 className="text-blueGray-500 text-xs uppercase font-bold pb-2">
            Área Académica
          </h6>

          <ul className="flex flex-col list-none">
            <li>
              <Link href="/academico/alunos" className={`text-xs uppercase py-3 font-bold block ${activeLink("/academico/alunos")}`}>
                <i className={`fas fa-user-graduate mr-2 ${activeIcon("/academico/alunos")}`}></i>
                Alunos
              </Link>
            </li>

            <li>
              <Link href="/academico/docentes" className={`text-xs uppercase py-3 font-bold block ${activeLink("/academico/docentes")}`}>
                <i className={`fas fa-chalkboard-teacher mr-2 ${activeIcon("/academico/docentes")}`}></i>
                Docentes
              </Link>
            </li>

            <li>
              <Link href="/academico/turmas" className={`text-xs uppercase py-3 font-bold block ${activeLink("/academico/turmas")}`}>
                <i className={`fas fa-users-class mr-2 ${activeIcon("/academico/turmas")}`}></i>
                Turmas
              </Link>
            </li>
          </ul>

          <hr className="my-4" />

          {/* SISTEMA */}
          <h6 className="text-blueGray-500 text-xs uppercase font-bold pb-2">
            Sistema
          </h6>

          <ul className="flex flex-col list-none mb-4">
            <li>
              <Link href="/configuracoes" className="text-xs uppercase py-3 font-bold block text-blueGray-700">
                <i className="fas fa-cogs mr-2 text-blueGray-400"></i>
                Configurações
              </Link>
            </li>

            <li>
              <Link href="/auth/logout" className="text-xs uppercase py-3 font-bold block text-red-500">
                <i className="fas fa-sign-out-alt mr-2"></i>
                Sair
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}
