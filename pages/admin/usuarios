import React, { useState } from "react";
import CardTable from "components/Cards/CardTable.js";
import Admin from "layouts/Admin.js";
import UserModal from "components/Modals/UserModal.js"; // Importe o modal criado acima

export default function UserManagement() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-xl font-semibold">Gestão de Usuários</h2>
            <button
              className="bg-white text-blueGray-700 active:bg-blueGray-50 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(true)}
            >
              <i className="fas fa-plus mr-2"></i> Novo Usuário
            </button>
          </div>
          
          {/* Tabela de Usuários */}
          <CardTable title="Usuários Ativos" />
        </div>
      </div>

      {/* Modal de Cadastro */}
      <UserModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

UserManagement.layout = Admin;
