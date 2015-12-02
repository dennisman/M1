package erdf;

import org.apache.jena.rdf.model.ModelFactory;

import controller_package.Controller;

public class Main {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		Controller ctrl = new Controller();
		ctrl.readingRDF("../projet/erdf.rdf");
		ctrl= new Controller(ModelFactory.createRDFSModel(ctrl.getDatas().getDefaultModel()));
		//ctrl.getModel().write(System.out, "N-TRIPLE");
		
		System.out.println("******************************************************************************");
		System.out.println("******************************************************************************");
		System.out.println("******************************************************************************");
		

		System.out.println("******************************************************************************");
		System.out.println("Requete nbInstallations et puissance de centrale utilisant la biomass en 2011");
		ctrl.doSelect("../projet/sparql/biomass2011.rq");
		
		
		
		System.out.println("*************************************************************************************");
		System.out.println("Evolution du nombre d'installation de 2010 à 2014 pour le photovoltaique et leurs puissances générées");
		ctrl.doSelect("../projet/sparql/photovot.rq");
		
		
		
		System.out.println("*************************************************************************************");
		System.out.println("Nombre d'installations, puissance générées en 2010 et 2014 par type de production");
		ctrl.doSelect("../projet/sparql/nbinstall10_14_2.rq");
		
		System.out.println("*************************************************************************************");
		System.out.println("Nombre d'installations, puissance générées en 2010 et 2014 par type de production");
		ctrl.doSelect("../projet/sparql/nbinstall10_14_2.rq");
	
	}

}
