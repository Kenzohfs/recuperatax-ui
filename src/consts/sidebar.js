import {
  FaEmpire,
  FaFile,
  FaFileWaveform,
  FaHouse,
  FaMagnifyingGlassDollar,
  FaPenToSquare,
  FaPeopleGroup,
  FaRobot,
} from 'react-icons/fa6';
import PrivatePaths from '../routes/privatePaths';

export const SIDEBAR_ITEMS = [
  {
    id: 1,
    icon: FaHouse,
    label: 'Início',
    path: PrivatePaths.COMPANIES,
    children: [],
  },
  {
    id: 2,
    icon: FaPenToSquare,
    label: 'Cadastros',
    path: PrivatePaths.REGISTERS,
    children: [
      {
        id: 8,
        label: 'Empresas',
        path: PrivatePaths.COMPANIES,
      },
    ],
  },
  {
    id: 3,
    icon: FaFile,
    label: 'Arquivos Fiscais',
    path: PrivatePaths.FISCAL_FILES,
    children: [],
  },
  {
    id: 4,
    icon: FaFileWaveform,
    label: 'Relatório',
    path: PrivatePaths.REPORTS,
    children: [],
  },
  {
    id: 5,
    icon: FaMagnifyingGlassDollar,
    label: 'Diagnóstico Express',
    path: PrivatePaths.DIAGNOSTIC,
    children: [],
  },
  {
    id: 6,
    icon: FaRobot,
    label: 'Consultor IA',
    path: PrivatePaths.IA_CONSULTANT,
    children: [],
  },
  {
    id: 7,
    icon: FaPeopleGroup,
    label: 'Área de Membros',
    path: PrivatePaths.MEMBERS_AREA,
    children: [
      {
        id: 11,
        label: 'Planilhas',
        path: PrivatePaths.SHEETS,
      },
    ],
  },
];

export const SIDEBAR_HELP = [
  {
    id: 1,
    icon: FaEmpire,
    label: 'Abrir Chamado',
    path: PrivatePaths.OPEN_CALL,
    children: [],
  },
];
