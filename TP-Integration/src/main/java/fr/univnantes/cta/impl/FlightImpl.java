package fr.univnantes.cta.impl;

import fr.univnantes.cta.Airplane;
import fr.univnantes.cta.AirplaneOverload;
import fr.univnantes.cta.Airport;
import fr.univnantes.cta.Flight;
import fr.univnantes.cta.FlightPlan;
import fr.univnantes.cta.IncompatibleAirway;



abstract  class FlightImpl implements Flight{
	private Airport _depart, _arrive;
	private Airplane _avion;
	private FlightPlan _flightplane;
	protected int _nbpassagers;
	
	public FlightImpl(Airport departure, Airport arrival,
			Airplane plane, FlightPlan fp, int passengers)
			throws IncompatibleAirway, AirplaneOverload {
		_depart = departure;
		_arrive = arrival;
		_avion = plane;
		_flightplane = fp;
		_nbpassagers = passengers;
	}

	public Airplane getAirplane() {
		return _avion;
	}

	public Airport getArrival() {
		return _arrive;
	}

	public Airport getDeparture() {
		return _depart;
	}

	public FlightPlan getFlightPlan() {
		return _flightplane;
	}
	
	public abstract double loadingWeight();
	
	public abstract double totalWeight();
}