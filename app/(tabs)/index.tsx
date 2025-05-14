import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { Calendar, Compass, MapPin, Sun, ThermometerSnowflake, Wind, Utensils, Backpack } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import { UpcomingTrip } from '@/components/home/UpcomingTrip';
import { WeatherCard } from '@/components/home/WeatherCard';
import { EmptyState } from '@/components/shared/EmptyState';

export default function HomeScreen() {
  const [hasUpcomingTrips, setHasUpcomingTrips] = useState(false);
  
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeTitle}>Welcome to CampTrails</Text>
        <Text style={styles.welcomeSubtitle}>Plan your next adventure</Text>
      </View>
      
      <View style={styles.weatherSection}>
        <Text style={styles.sectionTitle}>Current Weather</Text>
        <WeatherCard 
          location="Yosemite National Park"
          temperature="72°F"
          condition="Sunny"
          icon={<Sun size={24} color={Colors.accent} />}
          details={[
            { icon: <ThermometerSnowflake size={16} color={Colors.textLight} />, label: 'Low: 54°F' },
            { icon: <Wind size={16} color={Colors.textLight} />, label: 'Wind: 5 mph' },
          ]}
        />
      </View>

      <View style={styles.upcomingSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming Trips</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllButton}>See All</Text>
          </TouchableOpacity>
        </View>
        
        {hasUpcomingTrips ? (
          <UpcomingTrip 
            title="Yosemite Backpacking"
            dates="May 15-18, 2025"
            location="Yosemite National Park, CA"
            image="https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg"
            participants={3}
            completionRate={75}
          />
        ) : (
          <EmptyState 
            icon={<Calendar size={40} color={Colors.primary} />}
            title="No upcoming trips"
            message="Start planning your next adventure by creating a new trip."
            actionLabel="Create Trip"
            onAction={() => {/* Navigate to trip creation */}}
          />
        )}
      </View>

      <View style={styles.quickStartSection}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActionsGrid}>
          <TouchableOpacity style={styles.quickAction}>
            <Calendar size={28} color={Colors.primary} />
            <Text style={styles.quickActionText}>New Trip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAction}>
            <Utensils size={28} color={Colors.primary} />
            <Text style={styles.quickActionText}>New Meal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAction}>
            <Backpack size={28} color={Colors.primary} />
            <Text style={styles.quickActionText}>Gear List</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAction}>
            <Compass size={28} color={Colors.primary} />
            <Text style={styles.quickActionText}>Explore</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.recentSection}>
        <Text style={styles.sectionTitle}>Recent Activities</Text>
        <View style={styles.recentActivity}>
          <MapPin size={20} color={Colors.primary} />
          <Text style={styles.recentActivityText}>You added "Big Agnes Tent" to your gear</Text>
        </View>
        <View style={styles.recentActivity}>
          <Calendar size={20} color={Colors.primary} />
          <Text style={styles.recentActivityText}>You created a new trip to Yosemite</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 16,
  },
  welcomeSection: {
    marginBottom: 24,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: Colors.textLight,
  },
  weatherSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 12,
  },
  upcomingSection: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  seeAllButton: {
    color: Colors.primary,
    fontWeight: '600',
  },
  quickStartSection: {
    marginBottom: 24,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -8,
  },
  quickAction: {
    width: '50%',
    padding: 8,
  },
  quickActionInner: {
    backgroundColor: Colors.card,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  quickActionText: {
    marginTop: 8,
    color: Colors.text,
    fontWeight: '500',
  },
  recentSection: {
    marginBottom: 24,
  },
  recentActivity: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.card,
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
  },
  recentActivityText: {
    marginLeft: 12,
    fontSize: 14,
    color: Colors.text,
  },
});