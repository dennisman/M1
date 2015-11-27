package tests;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import fr.univnantes.cta.impl.AirplaneImpl;
import fr.univnantes.cta.impl.CTAFactoryImpl;

public class CtaFactory_Test {
	private CTAFactoryImpl cta;

	@Before
	public void setUp() throws Exception {
		cta = new CTAFactoryImpl();
	}

	@Test
	public void testCreateAirplane() {
		assertTrue(cta.createAirplane(1., 2, 3, 4).equals(new AirplaneImpl(1., 2, 3, 4)));
	}

	@Test
	public void testCreateAirport() {
		fail("Not yet implemented");
	}

	@Test
	public void testCreateAirway() {
		fail("Not yet implemented");
	}

	@Test
	public void testCreateCivilFlight() {
		fail("Not yet implemented");
	}

	@Test
	public void testCreateFlightPlan() {
		fail("Not yet implemented");
	}

	@Test
	public void testCreateLatitude() {
		fail("Not yet implemented");
	}

	@Test
	public void testCreateLongitude() {
		fail("Not yet implemented");
	}

	@Test
	public void testCreateMilitarFlight() {
		fail("Not yet implemented");
	}

	@Test
	public void testCreatePosition() {
		fail("Not yet implemented");
	}

	@Test
	public void testCreateTakenAirway() {
		fail("Not yet implemented");
	}

	@Test
	public void testCreateVOR() {
		fail("Not yet implemented");
	}

	@Test
	public void testSetAirplanes() {
		fail("Not yet implemented");
	}

}
