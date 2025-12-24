import React from "react";

// layout
import Admin from "layouts/Admin.js";

// components
import CardProfile from "components/Cards/CardProfile.js";

export default function Dashboard() {
  return (
    <>
      {/* Metrics */}
      <div className="flex flex-wrap">
        <MetricCard
          title="Total de Documentos"
          value="1.248"
          icon="fas fa-folder-open"
          color="bg-lightBlue-500"
        />
        <MetricCard
          title="Documentos de Alunos"
          value="642"
          icon="fas fa-user-graduate"
          color="bg-emerald-500"
        />
        <MetricCard
          title="Administrativos"
          value="389"
          icon="fas fa-file-alt"
          color="bg-orange-500"
        />
        <MetricCard
          title="Usuários"
          value="24"
          icon="fas fa-users"
          color="bg-indigo-500"
        />
      </div>

      {/* Main content */}
      <div className="flex flex-wrap mt-4">
        {/* Left */}
        <div className="w-full lg:w-8/12 px-4">
          <RecentActivity />
        </div>

        {/* Right */}
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
          <QuickActions />
        </div>
      </div>
    </>
  );
}

/* ================= Components ================= */

function MetricCard({ title, value, icon, color }) {
  return (
    <div className="w-full md:w-6/12 xl:w-3/12 px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {title}
              </h5>
              <span className="font-semibold text-xl text-blueGray-700">
                {value}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ${color}`}
              >
                <i className={icon}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecentActivity() {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
      <div className="px-4 py-3 border-b border-blueGray-200">
        <h3 className="font-semibold text-blueGray-700">
          Atividades Recentes
        </h3>
      </div>
      <div className="p-4">
        <ul className="divide-y">
          <li className="py-2 text-sm text-blueGray-600">
            📄 Documento “Histórico Escolar” adicionado – Aluno João Manuel
          </li>
          <li className="py-2 text-sm text-blueGray-600">
            📝 Declaração emitida – Secretaria Académica
          </li>
          <li className="py-2 text-sm text-blueGray-600">
            👤 Novo usuário cadastrado – Docente
          </li>
          <li className="py-2 text-sm text-blueGray-600">
            🔄 Documento atualizado – Processo nº 2024/015
          </li>
        </ul>
      </div>
    </div>
  );
}

function QuickActions() {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg mt-6">
      <div className="px-4 py-3 border-b border-blueGray-200">
        <h3 className="font-semibold text-blueGray-700">
          Ações Rápidas
        </h3>
      </div>
      <div className="p-4 grid grid-cols-2 gap-4">
        <ActionButton
          label="Novo Documento"
          icon="fas fa-file-upload"
          color="bg-lightBlue-500"
        />
        <ActionButton
          label="Ver Arquivo"
          icon="fas fa-folder"
          color="bg-emerald-500"
        />
        <ActionButton
          label="Cadastrar Aluno"
          icon="fas fa-user-plus"
          color="bg-orange-500"
        />
        <ActionButton
          label="Usuários"
          icon="fas fa-users-cog"
          color="bg-indigo-500"
        />
      </div>
    </div>
  );
}

function ActionButton({ label, icon, color }) {
  return (
    <button
      className={`text-white text-sm font-bold px-4 py-3 rounded-lg shadow hover:opacity-90 ${color}`}
    >
      <i className={`${icon} mr-2`}></i>
      {label}
    </button>
  );
}

Dashboard.layout = Admin;
