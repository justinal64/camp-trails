import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
  Platform,
} from 'react-native';
import { X, Calendar, MapPin, Users } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import DateTimePicker from '@react-native-community/datetimepicker';

type CreateTripModalProps = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (tripData: TripFormData) => void;
};

export type TripFormData = {
  title: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  description: string;
  travelers: string;
};

export function CreateTripModal({ visible, onClose, onSubmit }: CreateTripModalProps) {
  const [formData, setFormData] = useState<TripFormData>({
    title: '',
    destination: '',
    startDate: new Date(),
    endDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
    description: '',
    travelers: '1',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof TripFormData, string>>>({});
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<Record<keyof TripFormData, string>> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Trip name is required';
    }
    if (!formData.destination.trim()) {
      newErrors.destination = 'Destination is required';
    }
    if (formData.endDate <= formData.startDate) {
      newErrors.endDate = 'End date must be after start date';
    }
    if (!formData.travelers || parseInt(formData.travelers) < 1) {
      newErrors.travelers = 'At least 1 traveler is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Create New Trip</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <X size={24} color={Colors.text} />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Trip Name</Text>
              <TextInput
                style={[styles.input, errors.title && styles.inputError]}
                placeholder="Enter trip name"
                placeholderTextColor={Colors.textLight}
                value={formData.title}
                onChangeText={(text) => {
                  setFormData((prev) => ({ ...prev, title: text }));
                  if (errors.title) setErrors((prev) => ({ ...prev, title: '' }));
                }}
              />
              {errors.title && <Text style={styles.errorText}>{errors.title}</Text>}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Destination</Text>
              <View style={styles.inputWithIcon}>
                <MapPin size={20} color={Colors.textLight} style={styles.inputIcon} />
                <TextInput
                  style={[styles.input, styles.inputWithIconPadding, errors.destination && styles.inputError]}
                  placeholder="Where are you going?"
                  placeholderTextColor={Colors.textLight}
                  value={formData.destination}
                  onChangeText={(text) => {
                    setFormData((prev) => ({ ...prev, destination: text }));
                    if (errors.destination) setErrors((prev) => ({ ...prev, destination: '' }));
                  }}
                />
              </View>
              {errors.destination && <Text style={styles.errorText}>{errors.destination}</Text>}
            </View>

            <View style={styles.dateContainer}>
              <View style={[styles.inputGroup, { flex: 1, marginRight: 8 }]}>
                <Text style={styles.label}>Start Date</Text>
                <TouchableOpacity
                  style={styles.dateButton}
                  onPress={() => setShowStartDatePicker(true)}
                >
                  <Calendar size={20} color={Colors.textLight} />
                  <Text style={styles.dateButtonText}>
                    {formatDate(formData.startDate)}
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={[styles.inputGroup, { flex: 1, marginLeft: 8 }]}>
                <Text style={styles.label}>End Date</Text>
                <TouchableOpacity
                  style={[styles.dateButton, errors.endDate && styles.inputError]}
                  onPress={() => setShowEndDatePicker(true)}
                >
                  <Calendar size={20} color={Colors.textLight} />
                  <Text style={styles.dateButtonText}>
                    {formatDate(formData.endDate)}
                  </Text>
                </TouchableOpacity>
                {errors.endDate && <Text style={styles.errorText}>{errors.endDate}</Text>}
              </View>
            </View>

            {(Platform.OS === 'ios' || showStartDatePicker) && (
              <DateTimePicker
                value={formData.startDate}
                mode="date"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={(event, selectedDate) => {
                  setShowStartDatePicker(false);
                  if (selectedDate) {
                    setFormData((prev) => ({ ...prev, startDate: selectedDate }));
                  }
                }}
              />
            )}

            {(Platform.OS === 'ios' || showEndDatePicker) && (
              <DateTimePicker
                value={formData.endDate}
                mode="date"
                minimumDate={formData.startDate}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={(event, selectedDate) => {
                  setShowEndDatePicker(false);
                  if (selectedDate) {
                    setFormData((prev) => ({ ...prev, endDate: selectedDate }));
                    if (errors.endDate) setErrors((prev) => ({ ...prev, endDate: '' }));
                  }
                }}
              />
            )}

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Number of Travelers</Text>
              <View style={styles.inputWithIcon}>
                <Users size={20} color={Colors.textLight} style={styles.inputIcon} />
                <TextInput
                  style={[styles.input, styles.inputWithIconPadding, errors.travelers && styles.inputError]}
                  placeholder="How many people?"
                  placeholderTextColor={Colors.textLight}
                  keyboardType="number-pad"
                  value={formData.travelers}
                  onChangeText={(text) => {
                    setFormData((prev) => ({ ...prev, travelers: text }));
                    if (errors.travelers) setErrors((prev) => ({ ...prev, travelers: '' }));
                  }}
                />
              </View>
              {errors.travelers && <Text style={styles.errorText}>{errors.travelers}</Text>}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Description (Optional)</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Add some notes about your trip..."
                placeholderTextColor={Colors.textLight}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                value={formData.description}
                onChangeText={(text) => setFormData((prev) => ({ ...prev, description: text }))}
              />
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Create Trip</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    width: '90%',
    maxWidth: 500,
    maxHeight: '90%',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
  },
  closeButton: {
    padding: 8,
  },
  form: {
    padding: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text,
    marginBottom: 8,
  },
  input: {
    backgroundColor: Colors.gray[50],
    borderRadius: 8,
    padding: 12,
    color: Colors.text,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.gray[50],
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  inputIcon: {
    padding: 12,
  },
  inputWithIconPadding: {
    flex: 1,
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  inputError: {
    borderColor: Colors.error,
  },
  errorText: {
    color: Colors.error,
    fontSize: 12,
    marginTop: 4,
  },
  dateContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.gray[50],
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  dateButtonText: {
    color: Colors.text,
    marginLeft: 8,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 24,
  },
  cancelButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginRight: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  cancelButtonText: {
    color: Colors.text,
    fontWeight: '500',
  },
  submitButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  submitButtonText: {
    color: Colors.white,
    fontWeight: '500',
  },
});