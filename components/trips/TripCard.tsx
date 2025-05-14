import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MapPin, Users } from 'lucide-react-native';
import Colors from '@/constants/Colors';

type TripCardProps = {
  title: string;
  dates: string;
  location: string;
  image: string;
  participants: number;
  completionRate: number;
  onPress?: () => void;
};

export function TripCard({
  title,
  dates,
  location,
  image,
  participants,
  completionRate,
  onPress,
}: TripCardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.dates}>{dates}</Text>
        
        <View style={styles.locationContainer}>
          <MapPin size={14} color={Colors.textLight} />
          <Text style={styles.location}>{location}</Text>
        </View>
        
        <View style={styles.footer}>
          <View style={styles.participants}>
            <Users size={14} color={Colors.textLight} />
            <Text style={styles.participantsText}>{participants}</Text>
          </View>
          
          <View style={styles.progressContainer}>
            <View style={styles.progressBackground}>
              <View 
                style={[
                  styles.progressFill, 
                  { width: `${completionRate}%` }
                ]} 
              />
            </View>
            <Text style={styles.progressText}>{completionRate}% Ready</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  dates: {
    fontSize: 14,
    color: Colors.primary,
    marginBottom: 8,
    fontWeight: '500',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  location: {
    fontSize: 14,
    color: Colors.textLight,
    marginLeft: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  participants: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  participantsText: {
    marginLeft: 4,
    fontSize: 14,
    color: Colors.textLight,
  },
  progressContainer: {
    alignItems: 'flex-end',
  },
  progressBackground: {
    height: 4,
    width: 100,
    backgroundColor: Colors.gray[200],
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 4,
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.primary,
  },
  progressText: {
    fontSize: 12,
    color: Colors.textLight,
  },
});