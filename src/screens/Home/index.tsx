import { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export const Home = () => {
  const [name, setName] = useState("");
  const [participants, setParticipants] = useState<string[]>([]);

  const handleRemoveParticipant = (name: string) => {
    Alert.alert("Remover", `Você remover o participante: ${name}?`, [
      {
        text: "Sim",
        onPress: () => {
          const newParticipants = [...participants];
          const removeParticipant = newParticipants.filter(
            (item) => item !== name
          );
          setParticipants(removeParticipant);
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  const handleAddParticipant = () => {
    if (participants.includes(name)) {
      return Alert.alert(
        "Participante Existe",
        "Já existe um participante na lista com este nome!",
        [{ text: "Fechar", style: "cancel" }]
      );
    }

    setParticipants((prevState) => [...prevState, name]);
    setName("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sábado, 20 de agosto de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setName}
          value={name}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleAddParticipant}
          disabled={!name}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.textListEmpty}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
};
