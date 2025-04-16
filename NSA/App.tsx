import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importando o ícone

export default function App() {
  // Exemplo de dados do aluno
  const student = {
    name: 'João Silva',
    class: '3º Ano - A',
    registrationNumber: '123456',
  };

  // Exemplo de dados do boletim
  const subjects = [
    { name: 'Matemática', grade: 8.5, absences: 2, classesHeld: 40, mention: 'Bom' },
    { name: 'Português', grade: 9.0, absences: 1, classesHeld: 40, mention: 'Ótimo' },
    { name: 'História', grade: 7.0, absences: 3, classesHeld: 40, mention: 'Regular' },
    { name: 'Ciências', grade: 8.0, absences: 0, classesHeld: 40, mention: 'Bom' },
    { name: 'Geografia', grade: 8.5, absences: 1, classesHeld: 40, mention: 'Bom' },
    { name: 'Educação Física', grade: 9.5, absences: 0, classesHeld: 40, mention: 'Ótimo' },
    { name: 'Artes', grade: 7.5, absences: 2, classesHeld: 40, mention: 'Regular' },
    // Adicione mais matérias se necessário para testar o scroll
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.header}>Boletim Escolar</Text>
        <View style={styles.infoContainer}>
          <View style={styles.imageContainer}>
            <Icon name="user" size={50} color="#fff" /> {/* Ícone de silhueta */}
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{student.name}</Text>
            <Text style={styles.class}>Turma: {student.class}</Text>
            <Text style={styles.registrationNumber}>Matrícula: {student.registrationNumber}</Text>
          </View>
        </View>

        <View style={styles.reportCard}>
          <Text style={styles.reportTitle}>Boletim</Text>
          {subjects.map((subject, index) => (
            <View key={index} style={styles.subjectContainer}>
              <Text style={styles.subjectName}>{subject.name}</Text>
              <Text style={styles.subjectDetail}>Nota: {subject.grade}</Text>
              <Text style={styles.subjectDetail}>Faltas: {subject.absences}</Text>
              <Text style={styles.subjectDetail}>Aulas Dadas: {subject.classesHeld}</Text>
              <Text style={styles.subjectDetail}>Menção: {subject.mention}</Text>
              <View style={styles.separator} /> {/* Separador entre as matérias */}
            </View>
          ))}
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Cor de fundo mais clara
  },
  scrollViewContent: {
    padding: 16,
    paddingBottom: 20, // Adiciona um pouco de espaço no final
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007BFF', // Cor do cabeçalho
    marginBottom: 20,
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff', // Fundo branco para a informação do aluno
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    width: '100%', // Largura total
  },
  imageContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#007BFF', // Cor de fundo do retângulo
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textContainer: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  class: {
    fontSize: 16,
  },
  registrationNumber: {
    fontSize: 16,
    color: 'gray',
  },
  reportCard: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '100%', // Largura total
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2, // Para Android
  },
  reportTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007BFF', // Cor do título do boletim
  },
  subjectContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9', // Fundo claro para as matérias
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 1, // Para Android
  },
  subjectName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Cor do nome da matéria
  },
  subjectDetail: {
    fontSize: 16,
    color: '#555', // Cor dos detalhes
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd', // Cor do separador
    marginVertical: 10,
  },
});