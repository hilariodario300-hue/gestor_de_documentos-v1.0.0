import React from "react";
import PropTypes from "prop-types";

export default function CardStats({
  statSubtitle = "Total de Documentos",
  statTitle = "0",
  statArrow = "up",
  statPercent = "0",
  statPercentColor = "text-emerald-500",
  statDescription = "Registrados este mês",
  statIconName = "fas fa-folder-open",
  statIconColor = "bg-lightBlue-500",
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg border border-blueGray-100">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              {/* Categoria do Documento / Estatística */}
              <h5 className="text-blueGray-400 uppercase font-bold text-xs tracking-wider">
                {statSubtitle}
              </h5>
              {/* Quantidade Principal */}
              <span className="font-semibold text-xl text-blueGray-700">
                {statTitle}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              {/* Ícone Acadêmico/Gestão */}
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-md rounded-full " +
                  statIconColor
                }
              >
                <i className={statIconName}></i>
              </div>
            </div>
          </div>
          <p className="text-sm text-blueGray-400 mt-4">
            <span className={statPercentColor + " mr-2"}>
              <i
                className={
                  statArrow === "up"
                    ? "fas fa-arrow-up"
                    : statArrow === "down"
                    ? "fas fa-arrow-down"
                    : ""
                }
              ></i>{" "}
              {statPercent}%
            </span>
            <span className="whitespace-nowrap">{statDescription}</span>
          </p>
        </div>
      </div>
    </>
  );
}

// Exemplos de ícones úteis para sua Instituição de Ensino em 2025:
// Diplomas: "fas fa-graduation-cap" (bg-orange-500)
// Matrículas: "fas fa-user-graduate" (bg-pink-500)
// Arquivos PDF: "fas fa-file-pdf" (bg-red-500)
// Certificados: "fas fa-certificate" (bg-emerald-500)

CardStats.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statArrow: PropTypes.oneOf(["up", "down"]),
  statPercent: PropTypes.string,
  statPercentColor: PropTypes.string,
  statDescription: PropTypes.string,
  statIconName: PropTypes.string,
  statIconColor: PropTypes.string,
};
