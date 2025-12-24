import React from "react";

// components
import CardStats from "components/Cards/CardStats.js";
import CardRecentDocuments from "components/Cards/CardRecentDocuments.js";
import CardSystemInfo from "components/Cards/CardSystemInfo.js";

// layout
import Admin from "layouts/Admin.js";

export default function Dashboard() {
  return (
    <>
      {/* Cards de estatísticas */}
      <div className="flex flex-wrap">
        <div className="w-full lg:w-3/12 px-4">
          <CardStats
            statTitle="Documentos"
            statValue="1,248"
            statIconName="fas fa-folder-open"
            statIconColor="bg-lightBlue-500"
          />
        </div>

        <div className="w-full lg:w-3/12 px-4">
          <CardStats
            statTitle="Alunos"
            statValue="842"
            statIconName="fas fa-user-graduate"
            statIconColor="bg-emerald-500"
          />
        </div>

        <div className="w-full lg:w-3/12 px-4">
          <CardStats
            statTitle="Pendentes"
            statValue="36"
            statIconName="fas fa-clock"
            statIconColor="bg-orange-500"
          />
        </div>

        <div className="w-full lg:w-3/12 px-4">
          <CardStats
            statTitle="Usuários"
            statValue="12"
            statIconName="fas fa-users"
            statIconColor="bg-purple-500"
          />
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="flex flex-wrap mt-4">
        <div className="w-full lg:w-8/12 px-4">
          <CardRecentDocuments />
        </div>

        <div className="w-full lg:w-4/12 px-4">
          <CardSystemInfo />
        </div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;
