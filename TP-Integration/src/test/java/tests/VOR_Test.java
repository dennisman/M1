package tests;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import fr.univnantes.cta.CompassDirection;
import fr.univnantes.cta.impl.LatitudeImpl;
import fr.univnantes.cta.impl.LongitudeImpl;
import fr.univnantes.cta.impl.PositionImpl;
import fr.univnantes.cta.impl.VORImpl;

public class VOR_Test {
	protected VORImpl vor;
	protected VORImpl other;
	protected PositionImpl pos1;
	protected PositionImpl pos2;
	
	@Before
	public void setUp() throws Exception {
		LatitudeImpl latitude = new LatitudeImpl(1, 0, 0, CompassDirection.NORTH);
		LongitudeImpl longitude = new LongitudeImpl(1, 0, 0, CompassDirection.EAST);
		LongitudeImpl longitude2 = new LongitudeImpl(2, 0, 0, CompassDirection.EAST);
		pos1 = new PositionImpl(latitude, longitude);
		pos2 = new PositionImpl(latitude, longitude2);
		vor = new VORImpl("str", pos1);
		other = new VORImpl("other", pos2);
	}


	@Test
	public void testDistanceTo() {		
		assertTrue(vor.distanceTo(other)==pos1.distanceTo(pos2));
	}

	@Test
	public void testGetName() {
		assertEquals(vor.getName(),"str");
	}

	@Test
	public void testGetPosition() {
		assertSame(vor.getPosition(),pos1);
	}

}
