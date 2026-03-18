/**
 * Repositórios - camada de acesso a dados por domínio.
 * Students: implementação em students.ts
 * Demais: re-exporta de database-utils para compatibilidade.
 */

export {
  getStudents,
  getStudentById,
  saveStudent,
  deleteStudent,
} from './students'

export {
  getProfessionals,
  getProfessionalById,
  getProfessionalByUserId,
  saveProfessional,
  deleteProfessional,
} from '@/lib/database-utils'

export {
  getClasses,
  saveClass,
} from '@/lib/database-utils'

export {
  registerAttendance,
  getStudentAttendance,
  getStudentPayments,
  registerPayment,
} from '@/lib/database-utils'

export {
  getDashboardStats,
} from '@/lib/database-utils'

export {
  getStudioSetting,
  updateStudioSetting,
  getStudioNiche,
  getModalities,
  saveModality,
} from '@/lib/database-utils'

export {
  getExpenses,
  saveExpense,
  deleteExpense,
} from '@/lib/database-utils'

export {
  saveChatSession,
  getChatSessions,
  getChatSessionById,
  deleteChatSession,
  saveFireProtectionChatSession,
  getFireProtectionChatSessions,
  getFireProtectionChatSessionById,
  deleteFireProtectionChatSession,
} from '@/lib/database-utils'

export {
  getStudioApiKey,
  saveStudioApiKey,
} from '@/lib/database-utils'

export {
  getCurrentStudioId,
} from '@/lib/database-utils'
