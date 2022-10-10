package ivy.training.hibernate;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.AnnotationConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.File;
import java.util.List;

@SpringBootApplication
public class HibernateApplication {

	public static void main(String[] args) {
		String Config = "hibernate.cfg.xml";
		ClassLoader classLoader = HibernateApplication.class.getClassLoader();
		System.out.println(classLoader.getName());
		File obj = new File(classLoader.getResource(Config).getFile());
		SessionFactory sessionFactory = new AnnotationConfiguration().configure(obj).buildSessionFactory();
		Session session = sessionFactory.openSession();
		fetchStudentRecord(session);
		insertStudentRecord(session);
		updateStudent(session);
		deleteStudentRecord(session);
		session.close();
	}

	private static void deleteStudentRecord(Session session) {
		long id= 4;
		StudentTable studentone = (StudentTable) session.get(StudentTable.class, id);
		session.beginTransaction();
		session.delete(studentone);
		session.getTransaction().commit();
		System.out.println("Record deleted succesfully...");
	}

	private static void updateStudent(Session session) {
		long id = 3;
		StudentTable studentone = (StudentTable) session.get(StudentTable.class, id);
		studentone.setRoll_no(300);
		session.beginTransaction();
		session.update(studentone);
		session.getTransaction().commit();
		System.out.println("Record updated succesfully...");
	}
	private static void insertStudentRecord(Session session) {
		StudentTable student1 = new StudentTable();
		student1.setFirstname("ssv");
		student1.setLastname("b");
		student1.setRoll_no(01);
		student1.setStandard(2);
		session.beginTransaction();
		session.save(student1);
		session.getTransaction().commit();
		System.out.println("Record insert succesfully...");
	}


	private static void fetchStudentRecord(Session session) {
		Query query = session.createQuery("FROM StudentTable");
		List<StudentTable> Students = query.list();

		System.out.println("Reading student records...");
		for (StudentTable studentObj : Students) {
			System.out.println("First Name" + studentObj.getFirstname());
			System.out.println("Last Name" + studentObj.getLastname());
			System.out.println("Roll Number" + studentObj.getStandard());
			System.out.println("Standard" + studentObj.getStandard());
		}


	}
}
