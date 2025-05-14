import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Calendar, Tag, Weight } from 'lucide-react-native';
import Colors from '@/constants/Colors';

type GearCardProps = {
  name: string;
  category: string;
  weight: string;
  lastMaintenance: string;
  image: string;
  status: 'Good' | 'Needs maintenance' | 'Needs replacement';
  onPress?: () => void;
};

export function GearCard({
  name,
  category,
  weight,
  lastMaintenance,
  image,
  status,
  onPress,
}: GearCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Good':
        return Colors.success;
      case 'Needs maintenance':
        return Colors.warning;
      case 'Needs replacement':
        return Colors.error;
      default:
        return Colors.gray[500];
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        
        <View style={styles.details}>
          <View style={styles.detailItem}>
            <Tag size={14} color={Colors.textLight} />
            <Text style={styles.detailText}>{category}</Text>
          </View>
          <View style={styles.detailItem}>
            <Weight size={14} color={Colors.textLight} />
            <Text style={styles.detailText}>{weight}</Text>
          </View>
          <View style={styles.detailItem}>
            <Calendar size={14} color={Colors.textLight} />
            <Text style={styles.detailText}>Last check: {lastMaintenance}</Text>
          </View>
        </View>
        
        <View style={styles.footer}>
          <View style={[styles.statusIndicator, { backgroundColor: getStatusColor(status) }]} />
          <Text style={[styles.statusText, { color: getStatusColor(status) }]}>{status}</Text>
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
    flexDirection: 'row',
    height: 120,
  },
  image: {
    width: 120,
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 8,
  },
  details: {
    marginBottom: 8,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  detailText: {
    marginLeft: 4,
    fontSize: 12,
    color: Colors.textLight,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
});