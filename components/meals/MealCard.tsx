import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Clock, Flame, Users } from 'lucide-react-native';
import Colors from '@/constants/Colors';

type MealCardProps = {
  name: string;
  category: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  calories: number;
  image: string;
  diet: string[];
  onPress?: () => void;
};

export function MealCard({
  name,
  category,
  prepTime,
  cookTime,
  servings,
  calories,
  image,
  diet,
  onPress,
}: MealCardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.categoryContainer}>
            <Text style={styles.category}>{category}</Text>
          </View>
        </View>
        
        <View style={styles.dietTags}>
          {diet.map((tag, index) => (
            <View key={index} style={styles.dietTag}>
              <Text style={styles.dietTagText}>{tag}</Text>
            </View>
          ))}
        </View>
        
        <View style={styles.details}>
          <View style={styles.detailItem}>
            <Clock size={14} color={Colors.textLight} />
            <Text style={styles.detailText}>{prepTime} prep</Text>
          </View>
          <View style={styles.detailItem}>
            <Flame size={14} color={Colors.textLight} />
            <Text style={styles.detailText}>{cookTime} cook</Text>
          </View>
          <View style={styles.detailItem}>
            <Users size={14} color={Colors.textLight} />
            <Text style={styles.detailText}>{servings} servings</Text>
          </View>
        </View>
        
        <View style={styles.caloriesContainer}>
          <Text style={styles.calories}>{calories} cal per serving</Text>
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
    height: 130,
  },
  image: {
    width: 130,
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    padding: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    flex: 1,
  },
  categoryContainer: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: 4,
  },
  category: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '500',
  },
  dietTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  dietTag: {
    backgroundColor: Colors.gray[100],
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 4,
    marginBottom: 4,
  },
  dietTagText: {
    color: Colors.text,
    fontSize: 10,
    fontWeight: '500',
  },
  details: {
    flexDirection: 'row',
    marginBottom: 8,
    flexWrap: 'wrap',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
    marginBottom: 4,
  },
  detailText: {
    marginLeft: 4,
    fontSize: 12,
    color: Colors.textLight,
  },
  caloriesContainer: {
    marginTop: 'auto',
  },
  calories: {
    fontSize: 12,
    color: Colors.textLight,
    fontWeight: '500',
  },
});