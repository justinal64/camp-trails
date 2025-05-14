import { View, Text, StyleSheet } from 'react-native';
import { ReactNode } from 'react';
import Colors from '@/constants/Colors';

type WeatherDetailProps = {
  icon: ReactNode;
  label: string;
};

type WeatherCardProps = {
  location: string;
  temperature: string;
  condition: string;
  icon: ReactNode;
  details: WeatherDetailProps[];
};

export function WeatherCard({
  location,
  temperature,
  condition,
  icon,
  details,
}: WeatherCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.location}>{location}</Text>
      </View>
      
      <View style={styles.mainContent}>
        <View style={styles.tempContainer}>
          <Text style={styles.temperature}>{temperature}</Text>
          <Text style={styles.condition}>{condition}</Text>
        </View>
        <View style={styles.iconContainer}>
          {icon}
        </View>
      </View>
      
      <View style={styles.details}>
        {details.map((detail, index) => (
          <View key={index} style={styles.detailItem}>
            {detail.icon}
            <Text style={styles.detailText}>{detail.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  header: {
    marginBottom: 12,
  },
  location: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text,
  },
  mainContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  tempContainer: {
    flexDirection: 'column',
  },
  temperature: {
    fontSize: 32,
    fontWeight: '600',
    color: Colors.text,
  },
  condition: {
    fontSize: 16,
    color: Colors.textLight,
  },
  iconContainer: {
    padding: 12,
    backgroundColor: Colors.gray[50],
    borderRadius: 50,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    marginLeft: 4,
    fontSize: 13,
    color: Colors.textLight,
  },
});